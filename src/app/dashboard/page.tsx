"use client";

import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs, query, limit } from "firebase/firestore";
import Link from "next/link";

type StatCard = {
  title: string;
  value: number;
  description: string;
  color: string;
  href: string;
};

export default function Dashboard() {
  const [stats, setStats] = useState<StatCard[]>([
    {
      title: "Total Clients",
      value: 0,
      description: "All registered clients",
      color: "bg-blue-500",
      href: "/dashboard/clients",
    },
    {
      title: "Active Leads",
      value: 0,
      description: "Leads requiring follow-up",
      color: "bg-green-500",
      href: "/dashboard/leads",
    },
    {
      title: "Active Projects",
      value: 0,
      description: "Projects in progress",
      color: "bg-purple-500",
      href: "/dashboard/projects",
    },
    {
      title: "Newsletter Subscribers",
      value: 0,
      description: "Total subscribers",
      color: "bg-amber-500",
      href: "/dashboard/newsletters",
    },
  ]);

  const [recentClients, setRecentClients] = useState<any[]>([]);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch stats counts
        const clientsSnapshot = await getDocs(collection(db, "clients"));
        const leadsSnapshot = await getDocs(collection(db, "leads"));
        const projectsSnapshot = await getDocs(collection(db, "projects"));
        const subscribersSnapshot = await getDocs(
          collection(db, "subscribers")
        );

        setStats([
          {
            title: "Total Clients",
            value: clientsSnapshot.size,
            description: "All registered clients",
            color: "bg-blue-500",
            href: "/dashboard/clients",
          },
          {
            title: "Active Leads",
            value: leadsSnapshot.size,
            description: "Leads requiring follow-up",
            color: "bg-green-500",
            href: "/dashboard/leads",
          },
          {
            title: "Active Projects",
            value: projectsSnapshot.size,
            description: "Projects in progress",
            color: "bg-purple-500",
            href: "/dashboard/projects",
          },
          {
            title: "Newsletter Subscribers",
            value: subscribersSnapshot.size,
            description: "Total subscribers",
            color: "bg-amber-500",
            href: "/dashboard/newsletters",
          },
        ]);

        // Get recent clients
        const recentClientsQuery = query(collection(db, "clients"), limit(5));
        const recentClientsSnapshot = await getDocs(recentClientsQuery);
        const recentClientsData = recentClientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecentClients(recentClientsData);

        // Get recent leads
        const recentLeadsQuery = query(collection(db, "leads"), limit(5));
        const recentLeadsSnapshot = await getDocs(recentLeadsQuery);
        const recentLeadsData = recentLeadsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecentLeads(recentLeadsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className={`rounded-md p-3 ${stat.color}`}>
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-gray-500 text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Clients */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Clients
            </h3>
            <Link
              href="/dashboard/clients"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all
            </Link>
          </div>
          <div className="p-6">
            {recentClients.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {recentClients.map((client) => (
                  <li key={client.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {client.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {client.email}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/dashboard/clients/${client.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No clients yet</p>
                <Link
                  href="/dashboard/clients/new"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Client
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Recent Leads</h3>
            <Link
              href="/dashboard/leads"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all
            </Link>
          </div>
          <div className="p-6">
            {recentLeads.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {recentLeads.map((lead) => (
                  <li key={lead.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {lead.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {lead.email} · {lead.source}
                        </p>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.status === "New"
                              ? "bg-green-100 text-green-800"
                              : lead.status === "Contacted"
                              ? "bg-blue-100 text-blue-800"
                              : lead.status === "Qualified"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No leads yet</p>
                <Link
                  href="/dashboard/leads/new"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Lead
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
