import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store";
import { fetchTourists, deleteTourist } from "./touristSlice";
import type { RootState, Tourist } from "../../../types/tourist.types";

const TouristList = () => {
  const dispatch = useDispatch<AppDispatch>();

  // ✅ GET: Fetching tourists data
  const { tourists, loading, error } = useSelector(
    (state: RootState) => state.tourist
  );

  useEffect(() => {
    dispatch(fetchTourists()); // GET request
  }, [dispatch]);

  // ✅ Loading state
  if (loading)
    return <p className="text-center text-blue-500 mt-8">Loading...</p>;

  // ✅ Error state
  if (error)
    return <p className="text-center text-red-500 mt-8">Error: {error}</p>;

  // ✅ No data state
  if (!tourists || tourists.length === 0)
    return (
      <p className="text-center text-gray-500 mt-8">
        No tourist data available.
      </p>
    );

  // ✅ Delete handler
  const handleDelete = (id: string) => {
    // DELETE request
    dispatch(deleteTourist(id));
    alert("Tourist deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tourists.map((tourist: Tourist) => (
        <div
          key={tourist._id}
          className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
        >
          <img
            src={tourist.image}
            alt={tourist.title}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">{tourist.title}</h2>
          <p className="text-gray-600">{tourist.description}</p>
          {/* ✅ DELETE button */}
          <button
            onClick={() => handleDelete(tourist._id)}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TouristList;
