// src/app/adminlogin/dashboard/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import Link from "next/link";
import { db } from "../../../../../lib/firebase";

interface Project {
  id: string;
  title: string;
  clientName: string;
  description: string;
  status: "not-started" | "in-progress" | "on-hold" | "completed" | string;
  startDate: Timestamp | string | Date;
  deadline: Timestamp | string | Date;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsSnapshot = await getDocs(collection(db, "projects"));

        const projectsList = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleDeleteProject = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", id));
        setProjects(projects.filter((project) => project.id !== id));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const filteredProjects = projects.filter((project) => {
    // Text search
    const matchesSearch =
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.clientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    if (filter === "all") return matchesSearch;
    if (filter === "active")
      return matchesSearch && project.status !== "completed";
    if (filter === "completed")
      return matchesSearch && project.status === "completed";

    return matchesSearch;
  });

  // Function to get status badge color
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "not-started":
        return "bg-gray-100 text-gray-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "on-hold":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to format date
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Not set";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Link href="/adminlogin/dashboard/projects/new">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add New Project
          </button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="w-full p-2 border rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Projects</option>
            <option value="active">Active Projects</option>
            <option value="completed">Completed Projects</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No projects found. Add your first project!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border text-left">Project Name</th>
                <th className="py-2 px-4 border text-left">Client</th>
                <th className="py-2 px-4 border text-left">Status</th>
                <th className="py-2 px-4 border text-left">Start Date</th>
                <th className="py-2 px-4 border text-left">Deadline</th>
                <th className="py-2 px-4 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border font-medium">
                    {project.title}
                  </td>
                  <td className="py-2 px-4 border">{project.clientName}</td>
                  <td className="py-2 px-4 border">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadgeClass(
                        project.status
                      )}`}
                    >
                      {project.status || "Not set"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border">
                    {formatDate(project.startDate)}
                  </td>
                  <td className="py-2 px-4 border">
                    {formatDate(project.deadline)}
                  </td>
                  <td className="py-2 px-4 border">
                    <div className="flex space-x-2">
                      <Link
                        href={`/adminlogin/dashboard/projects/${project.id}`}
                      >
                        <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 transition">
                          View
                        </button>
                      </Link>
                      <Link
                        href={`/adminlogin/dashboard/projects/${project.id}/edit`}
                      >
                        <button className="bg-green-100 text-green-600 px-3 py-1 rounded hover:bg-green-200 transition">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
