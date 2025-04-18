// src/app/dashboard/projects/[projectId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  doc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../../../../lib/firebase";

interface Task {
  id: string;
  title: string;
  dueDate: any;
  assignedTo: string;
  status: string;
  projectId: string;
  [key: string]: any;
}

interface Client {
  id: string;
  name: string;
  company: string;
  [key: string]: any;
}

interface TeamMember {
  name: string;
  role: string;
  [key: string]: any;
}

interface Project {
  id: string;
  title: string;
  clientId?: string;
  clientName?: string;
  description?: string;
  status: string;
  startDate: any;
  deadline: any;
  budget?: number;
  notes?: string;
  createdAt: any;
  team?: TeamMember[];
  [key: string]: any;
}

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    async function fetchProjectData() {
      try {
        // Fetch project
        const projectDoc = await getDoc(doc(db, "projects", projectId));

        if (!projectDoc.exists()) {
          router.push("/dashboard/projects");
          return;
        }

        const projectData = {
          id: projectDoc.id,
          ...projectDoc.data(),
        } as Project;

        setProject(projectData);

        // Fetch client if clientId exists
        if (projectData.clientId) {
          const clientDoc = await getDoc(
            doc(db, "clients", projectData.clientId)
          );
          if (clientDoc.exists()) {
            setClient({
              id: clientDoc.id,
              ...clientDoc.data(),
            } as Client);
          }
        }

        // Fetch related tasks
        const tasksQuery = query(
          collection(db, "tasks"),
          where("projectId", "==", projectId)
        );

        const tasksSnapshot = await getDocs(tasksQuery);
        const tasksList = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Task[];

        setTasks(tasksList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false);
      }
    }

    fetchProjectData();
  }, [projectId, router]);

  const handleDeleteProject = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", projectId));
        router.push("/dashboard/projects");
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  // Helper function to format dates
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Not set";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString();
  };

  // Helper function to get status badge class
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

  // Calculate project progress based on tasks
  const calculateProgress = () => {
    if (tasks.length === 0) return 0;

    const completedTasks = tasks.filter(
      (task) => task.status === "completed"
    ).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-6">
        <p>Project not found. It may have been deleted.</p>
        <Link href="/dashboard/projects">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Back to Projects
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="flex space-x-3">
          <Link href={`/dashboard/projects/${projectId}/edit`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Edit Project
            </button>
          </Link>
          <button
            onClick={handleDeleteProject}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Project details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project summary card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Project Details</h2>
              <span
                className={`px-3 py-1 rounded text-sm font-medium ${getStatusBadgeClass(
                  project.status
                )}`}
              >
                {project.status || "Not set"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-medium">
                  {client ? (
                    <Link href={`/dashboard/clients/${client.id}`}>
                      <span className="text-blue-600 hover:underline">
                        {client.name} - {client.company}
                      </span>
                    </Link>
                  ) : (
                    project.clientName || "No client assigned"
                  )}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-medium">
                  ${project.budget?.toLocaleString() || "0"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium">{formatDate(project.startDate)}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <p className="font-medium">{formatDate(project.deadline)}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between mb-1">
                <p className="text-sm text-gray-500">Progress</p>
                <p className="text-sm font-medium">{calculateProgress()}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Project description */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="whitespace-pre-line">
              {project.description || "No description provided."}
            </p>
          </div>

          {/* Tasks list */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Tasks</h2>
              <Link href={`/dashboard/projects/${projectId}/tasks/new`}>
                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition text-sm">
                  Add Task
                </button>
              </Link>
            </div>

            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks added yet.</p>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-500">
                        Due: {formatDate(task.dueDate)} | Assigned to:{" "}
                        {task.assignedTo || "Unassigned"}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadgeClass(
                        task.status
                      )}`}
                    >
                      {task.status || "Not started"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right column - Timeline & Notes */}
        <div className="space-y-6">
          {/* Project timeline */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>

            <div className="space-y-4">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div>
                  <p className="font-medium">Project Created</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(project.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div>
                  <p className="font-medium">Project Started</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(project.startDate)}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Project Deadline</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(project.deadline)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team members */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Team</h2>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition text-sm">
                Add Member
              </button>
            </div>

            {!project.team || project.team.length === 0 ? (
              <p className="text-gray-500">No team members assigned yet.</p>
            ) : (
              <ul className="space-y-2">
                {project.team.map((member, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm">
                        {member.name?.charAt(0) || "?"}
                      </span>
                    </div>
                    <span>{member.name}</span>
                    <span className="text-sm text-gray-500">{member.role}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Notes */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Notes</h2>
            <textarea
              className="w-full p-2 border rounded min-h-32"
              placeholder="Add project notes here..."
              value={project.notes || ""}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
