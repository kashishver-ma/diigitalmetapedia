"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";

interface EditClientProps {
  clientId: string;
}

export default function EditClient({ clientId }: EditClientProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    website: "",
    notes: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchClient() {
      try {
        const clientDoc = await getDoc(doc(db, "clients", clientId));
        if (clientDoc.exists()) {
          const data = clientDoc.data();
          setFormData({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            company: data.company || "",
            address: data.address || "",
            website: data.website || "",
            notes: data.notes || "",
          });
        } else {
          setError("Client not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching client.");
      } finally {
        setLoading(false);
      }
    }

    if (clientId) fetchClient();
  }, [clientId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);
      await updateDoc(doc(db, "clients", clientId), {
        ...formData,
        updatedAt: new Date(),
      });
      router.push(`/dashboard/clients/${clientId}`);
    } catch (err) {
      console.error(err);
      setError("Failed to update client.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-6">
      {error && <p className="text-red-600">{error}</p>}
      <input name="name" value={formData.name} onChange={handleChange} />
      {/* More fields here... */}
      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
