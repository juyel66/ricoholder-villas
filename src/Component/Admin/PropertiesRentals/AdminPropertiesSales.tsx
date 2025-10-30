import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Edit2,
  Trash2,
  Search,
  ChevronDown,
  AlertTriangle,
  CheckCircle,
  LucideTableProperties,
} from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// --- FAKE JSON DATA for Property Listings ---
const projectData = [
    {
    id: 3,
    title: "Elegant Suburban Estate",
    details: "7 bed · 5 bath",
    location: "Beverly Hills",
    price: "$3,200,000",
    type: "Estate",
    updateDate: "2025-10-08",
    status: "published",
    imageUrl:
      "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760554174/Image_Luxury_Modern_Villa_with_Pool_sdpezo.png",
  },
  {
    id: 4,
    title: "Cozy Beachside Condo",
    details: "1 bed · 1 bath",
    location: "San Diego",
    price: "$650,000",
    type: "Condo",
    updateDate: "2025-10-08",
    status: "draft",
    imageUrl: "https://placehold.co/64x64/ffc107/333333/png?text=CONDO",
  },
  {
    id: 1,
    title: "Luxury Modern Villa with Pool",
    details: "5 bed, 4 bath ,4 Poll",
    location: "Miami Beach",
    price: "$2,850,000",
    type: "Villa",
    updateDate: "2025-10-08",
    status: "published",
    imageUrl:
      "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760554174/Image_Luxury_Modern_Villa_with_Pool_sdpezo.png",
  },
  {
    id: 2,
    title: "Downtown Penthouse with City Views",
    details: "3 bed · 2 bath",
    location: "New York",
    price: "$1,650,000",
    type: "Penthouse",
    updateDate: "2025-10-08",
    status: "pending",
    imageUrl:
      "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760554255/Image_Downtown_Penthouse_with_City_Views_gfrhxe.png",
  },
  
  {
    id: 5,
    title: "Lakefront Cabin Retreat",
    details: "2 bed · 2 bath",
    location: "Seattle",
    price: "$950,000",
    type: "Cabin",
    updateDate: "2025-10-07",
    status: "published",
    imageUrl: "https://placehold.co/64x64/5a67d8/FFFFFF/png?text=CABIN",
  },
  {
    id: 6,
    title: "Historic Townhouse in Boston",
    details: "4 bed · 3 bath",
    location: "Boston",
    price: "$1,300,000",
    type: "Townhouse",
    updateDate: "2025-10-06",
    status: "pending",
    imageUrl:
      "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760554255/Image_Downtown_Penthouse_with_City_Views_gfrhxe.png",
  },
  {
    id: 7,
    title: "Mountain View Acreage",
    details: "Land only",
    location: "Denver",
    price: "$450,000",
    type: "Land",
    updateDate: "2025-10-05",
    status: "draft",
    imageUrl: "https://placehold.co/64x64/ed8936/FFFFFF/png?text=LAND",
  },
];

// --- Custom Toast Component (Internal) ---
const ToastNotification = ({ message, type, visible }) => {
  if (!visible) return null;
  const baseClass =
    "fixed bottom-4 right-4 p-4 rounded-lg shadow-xl text-white transition-opacity duration-300";
  const typeClass = type === "success" ? "bg-green-500" : "bg-red-500";
  const Icon = type === "success" ? CheckCircle : AlertTriangle;
  return (
    <div
      className={`${baseClass} ${typeClass} flex items-center space-x-2 z-50`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{message}</span>
    </div>
  );
};

const AdminPropertiesRentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [toast, setToast] = useState({ message: "", type: "", visible: false });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState(projectData);

  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const availableStatuses = ["All Status", "published", "pending", "draft"];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "published":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-orange-100 text-orange-700";
      case "draft":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast({ message: "", type: "", visible: false }), 3000);
  };

  const handleEdit = (id) => {
    const found = data.find((item) => item.id === id);
    if (found) {
      setEditItem({ ...found });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
        Swal.fire({
          title: "Deleted!",
          text: `Project ${id} has been deleted.`,
          icon: "success",
        });
        showToast(`Project ${id} deleted successfully!`, "success");
      }
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const filteredProjects = useMemo(() => {
    return data.filter((project) => {
      const statusMatch =
        statusFilter === "All Status" ||
        project.status.toLowerCase() === statusFilter.toLowerCase();
      const searchLower = searchTerm.toLowerCase();
      const searchMatch =
        project.title.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower) ||
        project.type.toLowerCase().includes(searchLower);
      return statusMatch && searchMatch;
    });
  }, [searchTerm, statusFilter, data]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const handleModalSave = () => {
    const updated = data.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    setData(updated);
    setIsModalOpen(false);
    showToast(`Project ${editItem.id} updated successfully!`, "success");
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h1 className="text-3xl font-semibold">Properties-Rentals</h1>
          <p className="text-gray-500">
            Your portfolio, beautifully organized.
          </p>
        </div>
        <Link
          to="/dashboard/sales/admin-create-property"
          className="bg-[#009689] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-colors duration-150"
        >
          <LucideTableProperties className="h-5 w-5" /> Create Property
        </Link>
      </div>

      <div className="min-h-screen font-sans">
        <ToastNotification {...toast} />

        {/* Search & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
          <div className="relative flex items-center w-full sm:max-w-sm border border-gray-300 rounded-lg bg-white shadow-sm">
            <Search className="h-4 w-4 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search properties, Agents, or listing..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 text-sm rounded-lg focus:outline-none placeholder-gray-500"
            />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none block w-full p-3 text-sm border border-gray-300 rounded-lg bg-white shadow-sm pr-10 focus:ring-blue-500 cursor-pointer"
            >
              {availableStatuses.map((status) => (
                <option key={status} value={status}>
                  {status.replace(/(\b\w)/g, (char) => char.toUpperCase())}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 w-4">
                    <input type="checkbox" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Update
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {currentProjects.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">
                          {item.details}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.updateDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                          item.status
                        )}`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-start gap-3">
                        <Button
                          onClick={() => handleEdit(item.id)}
                          className="p-2 border text-green-500 bg-white hover:bg-gray-100 flex items-center justify-center"
                        >
                          <img
                            src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1761000758/Edit_hejj0l.png"
                            alt="Edit"
                            className=""
                          />
                        </Button>
                        <Button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 border text-red-500 bg-white hover:bg-gray-100 flex items-center justify-center"
                        >
                          <Trash2 className="" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredProjects.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No projects found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center p-4 border-t">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-white border text-gray-900 hover:text-blue-600 disabled:opacity-50"
              >
                &larr; Previous
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <span
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 text-sm font-medium rounded cursor-pointer ${
                      currentPage === i + 1
                        ? "border border-blue-500 text-blue-600 bg-blue-100"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-white border text-gray-600 hover:text-blue-600 disabled:opacity-50"
              >
                Next &rarr;
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* --- EDIT MODAL --- */}
      {isModalOpen && editItem && (
        <div className="fixed inset-0   bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white border-2 border-gray-300 bg-bg-opacity-100 rounded-lg shadow-lg p-6 w-full max-w-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-semibold mb-4">
              Edit Project (ID: {editItem.id})
            </h2>
            <div className="space-y-3">
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                value={editItem.title}
                onChange={(e) =>
                  setEditItem({ ...editItem, title: e.target.value })
                }
                className="w-full border rounded p-2"
              />

              <label className="block text-sm font-medium">Details</label>
              <input
                type="text"
                value={editItem.details}
                onChange={(e) =>
                  setEditItem({ ...editItem, details: e.target.value })
                }
                className="w-full border rounded p-2"
              />

              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                value={editItem.location}
                onChange={(e) =>
                  setEditItem({ ...editItem, location: e.target.value })
                }
                className="w-full border rounded p-2"
              />

              <label className="block text-sm font-medium">Price</label>
              <input
                type="text"
                value={editItem.price}
                onChange={(e) =>
                  setEditItem({ ...editItem, price: e.target.value })
                }
                className="w-full border rounded p-2"
              />

              <label className="block text-sm font-medium">Type</label>
              <input
                type="text"
                value={editItem.type}
                onChange={(e) =>
                  setEditItem({ ...editItem, type: e.target.value })
                }
                className="w-full border rounded p-2"
              />

              <label className="block text-sm font-medium">Status</label>
              <select
                value={editItem.status}
                onChange={(e) =>
                  setEditItem({ ...editItem, status: e.target.value })
                }
                className="w-full border rounded p-2"
              >
                <option value="published">Published</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={handleModalSave}
                className="bg-blue-600 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPropertiesRentals;
