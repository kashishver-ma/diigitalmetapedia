// src/app/dashboard/projects/new/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../../lib/firebase";

interface Client {
  id: string;
  name: string;
  company: string;
  [key: string]: any;
}

export default function NewProjectPage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    clientId: "",
    clientName: "",
    description: "",
    status: "not-started",
    startDate: "",
    deadline: "",
    budget: "",
  });

  // Fetch clients for the dropdown
  useEffect(() => {
    async function fetchClients() {
      try {
        const clientsSnapshot = await getDocs(collection(db, "clients"));

        const clientsList = clientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Client[];

        setClients(clientsList);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    }

    fetchClients();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // If client selection changed, also update the client name
    if (name === "clientId") {
      const selectedClient = clients.find((client) => client.id === value);
      setFormData({
        ...formData,
        clientId: value,
        clientName: selectedClient ? selectedClient.name : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format dates to Firestore timestamps
      const projectData = {
        ...formData,
        startDate: formData.startDate ? new Date(formData.startDate) : null,
        deadline: formData.deadline ? new Date(formData.deadline) : null,
        budget: formData.budget ? Number(formData.budget) : 0,
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "projects"), projectData);

      setLoading(false);
      router.push(`/dashboard/projects/${docRef.id}`);
    } catch (error) {
      console.error("Error adding project:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Title */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="title"
            >
              Project Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 border rounded"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Client */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="clientId"
            >
              Client
            </label>
            <select
              id="clientId"
              name="clientId"
              className="w-full p-2 border rounded"
              value={formData.clientId}
              onChange={handleChange}
            >
              <option value="">Select a client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name} - {client.company}
                </option>
              ))}
            </select>
          </div>

          {/* Project Status */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full p-2 border rounded"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="budget"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              className="w-full p-2 border rounded"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          {/* Start Date */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full p-2 border rounded"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          {/* Deadline */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="w-full p-2 border rounded"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          {/* Description - Full width */}
          <div className="md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full p-2 border rounded"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
