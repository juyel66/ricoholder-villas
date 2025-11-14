// src/pages/Errors/NotFound.tsx
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      
      {/* Icon */}
      <div className="mb-6">
        <AlertTriangle className="w-20 h-20 text-[#009689]" />
      </div>

      {/* Error Code */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-2">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-lg mb-8">
        The page you're looking for may have been removed, renamed, or is temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#009689] text-white rounded-lg shadow-md hover:bg-[#007c74] transition-all font-semibold text-lg"
      >
        <Home className="w-5 h-5" />
        Go To Home
      </Link>

      {/* Eastmond Villas Branding */}
      <p className="text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} Eastmond Villas. All Rights Reserved.
      </p>
    </div>
  );
}
