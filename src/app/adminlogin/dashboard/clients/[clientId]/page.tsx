"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../../../lib/firebase"; // Adjust the import path as needed
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  notes?: string;
  createdAt?: any; // Firestore timestamp
}

interface ClientDetailsProps {
  params: Promise<{
    clientId: string;
  }>;
}

export default function ClientDetails({ params }: ClientDetailsProps) {
  // Unwrap the params using React.use()
  const { clientId } = use(params);
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchClientDetails() {
      if (!clientId) {
        setError("Client ID is required");
        setLoading(false);
        return;
      }

      try {
        // Reference to the specific client document in Firestore
        const clientDocRef = doc(db, "clients", clientId);
        const clientDoc = await getDoc(clientDocRef);

        if (clientDoc.exists()) {
          // Document exists, set the client data
          const clientData = clientDoc.data();
          setClient({
            id: clientDoc.id,
            name: clientData.name || "",
            company: clientData.company,
            email: clientData.email,
            phone: clientData.phone,
            website: clientData.website,
            address: clientData.address,
            notes: clientData.notes,
            createdAt: clientData.createdAt,
          });
        } else {
          // Document doesn't exist
          setError("Client not found");
        }
      } catch (error) {
        console.error("Error fetching client details:", error);
        setError("Failed to load client details");
      } finally {
        setLoading(false);
      }
    }

    fetchClientDetails();
  }, [clientId]);

  const handleDeleteClient = async () => {
    if (!clientId) return;

    if (
      window.confirm(
        "Are you sure you want to delete this client? This action cannot be undone."
      )
    ) {
      try {
        // Delete the client document from Firestore
        await deleteDoc(doc(db, "clients", clientId));
        router.push("/dashboard/clients");
      } catch (error) {
        console.error("Error deleting client:", error);
        setError("Failed to delete client");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700">{error}</p>
        <Link
          href="/dashboard/clients"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          Back to Clients
        </Link>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-700">Client data is not available</p>
        <Link
          href="/dashboard/clients"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          Back to Clients
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
          Client Details
        </h2>
        <div className="flex space-x-3">
          <Link
            href={`/dashboard/clients/${clientId}/edit`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Edit Client
          </Link>
          <button
            onClick={handleDeleteClient}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
          >
            Delete Client
          </button>
          <Link
            href="/dashboard/clients"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to List
          </Link>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {client.name || "Unnamed Client"}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {client.company || "No company specified"}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.name || "Not specified"}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Company</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.company || "Not specified"}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.email ? (
                  <a
                    href={`mailto:${client.email}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {client.email}
                  </a>
                ) : (
                  "Not specified"
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.phone ? (
                  <a
                    href={`tel:${client.phone}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {client.phone}
                  </a>
                ) : (
                  "Not specified"
                )}
              </dd>
            </div>
            {client.website && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <a
                    href={
                      typeof client.website === "string" &&
                      client.website.indexOf("http") === 0
                        ? client.website
                        : `https://${client.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {client.website}
                  </a>
                </dd>
              </div>
            )}
            {client.address && (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {client.address}
                </dd>
              </div>
            )}
            {client.notes && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Notes</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-line">
                  {client.notes}
                </dd>
              </div>
            )}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Created at</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.createdAt &&
                typeof client.createdAt.toDate === "function"
                  ? client.createdAt.toDate().toLocaleDateString()
                  : "Unknown"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
