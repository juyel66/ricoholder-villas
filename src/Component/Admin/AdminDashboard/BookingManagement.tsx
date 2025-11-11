import React, { useState } from "react";
import { Trash2 } from "lucide-react";

// BookingManagement.jsx
// Tailwind + React component using static fake JSON data for bookings.
// - Responsive table on desktop, stacked cards on mobile
// - Search like UserManagement (search by name, email, phone, or dates)
// - Delete button (red) with icon

const initialBookings = [
  {
    id: 1,
    name: "Sopoline Holt",
    email: "wuxadynul@mailinator.com",
    phone: "+1 (168) 856-8015",
    check_in_date: "2013-02-15",
    check_out_date: "1987-03-31",
    guests: 632,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "01234567890",
    check_in_date: "2025-10-10",
    check_out_date: "2025-10-20",
    guests: 2,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "01234567890",
    check_in_date: "2025-10-10",
    check_out_date: "2025-10-20",
    guests: 4,
  },
  {
    id: 4,
    name: "Admin Emily",
    email: "adminemily@gmail.com",
    phone: "01234567890",
    check_in_date: "2025-10-10",
    check_out_date: "2025-10-20",
    guests: 1,
  },
  {
    id: 5,
    name: "Rodriguez Sarah",
    email: "rodriguez.sarah@example.com",
    phone: "01234567890",
    check_in_date: "2025-10-10",
    check_out_date: "2025-10-20",
    guests: 3,
  },
];

export default function BookingManagement() {
  const [bookings, setBookings] = useState(initialBookings);
  const [query, setQuery] = useState("");

  function handleDelete(id) {
    const b = bookings.find((x) => x.id === id);
    if (!b) return;
    const confirmed = window.confirm(`Delete booking for ${b.name} (${b.email})?`);
    if (!confirmed) return;
    setBookings((prev) => prev.filter((x) => x.id !== id));
  }

  const filtered = bookings.filter((b) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      String(b.id).includes(q) ||
      b.name.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q) ||
      (b.phone && b.phone.toLowerCase().includes(q)) ||
      (b.check_in_date && b.check_in_date.toLowerCase().includes(q)) ||
      (b.check_out_date && b.check_out_date.toLowerCase().includes(q)) ||
      (b.guests && String(b.guests).includes(q))
    );
  });

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-1">Booking management</h1>
          <p className="text-sm text-gray-600 mb-4">Manage booking</p>

          <input
            type="search"
            placeholder="Search by name, email, phone, date or guests"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-96 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
          />
        </div>

        {/* Desktop / large screens: table (hidden on small) */}
        <div className="hidden lg:block bg-white border rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-700">No</th>
                <th className="px-6 py-3 font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 font-medium text-gray-700">Phone Number</th>
                <th className="px-6 py-3 font-medium text-gray-700">Check In</th>
                <th className="px-6 py-3 font-medium text-gray-700">Check Out</th>
                <th className="px-6 py-3 font-medium text-gray-700">Guests</th>
                <th className="px-6 py-3 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, idx) => (
                <tr key={b.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{b.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.check_in_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.check_out_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.guests}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(b.id)}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-white text-sm"
                      style={{ backgroundColor: "#DC2626" }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-6 text-center text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile / small screens: stacked cards (visible on small only) */}
        <div className="lg:hidden mt-6 space-y-4">
          {filtered.map((b, idx) => (
            <div key={b.id} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{idx + 1}. {b.name}</div>
                  <div className="text-xs text-gray-600">{b.email}</div>
                  <div className="text-xs text-gray-600">{b.phone}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Check In</div>
                  <div className="text-sm">{b.check_in_date}</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-gray-500">Check Out</div>
                  <div>{b.check_out_date}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Guests</div>
                  <div>{b.guests}</div>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-white text-sm"
                    style={{ backgroundColor: "#DC2626" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-sm text-gray-500">No bookings found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
