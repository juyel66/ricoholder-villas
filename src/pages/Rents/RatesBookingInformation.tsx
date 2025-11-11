import React from "react";

// Helper to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

interface Rate {
  id: number;
  period: string;
  min_stay: string;
  rate: number;
}

interface RatesBookingInformationProps {
  booking_rate_start: Rate[];
}

const RatesBookingInformation: React.FC<RatesBookingInformationProps> = ({
  booking_rate_start,
}) => {
  const imageUrl =
    "https://res.cloudinary.com/dqkczdjjs/image/upload/v1761084681/img_6_wyf01m.png";
  const fallbackImageUrl =
    "https://res.cloudinary.com/dqkczdjjs/image/upload/v1761084681/img_6_wyf01m.png";

  // ✅ Properly handle image error with correct typing
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    target.onerror = null; // prevent infinite loop
    target.src = fallbackImageUrl;
  };

  return (
    <div className="mt-20 flex flex-col items-center py-12 px-4 font-sans relative">
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none"></div>

      <div className="w-full z-10">
        {/* Title */}
        <h1 className="lg:text-4xl md:text-5xl text-2xl font-extrabold text-center text-[#111827] mb-2">
          Rates & Booking Information
        </h1>

        {/* Subtitle/Info Text */}
        <p className="text-gray-600 text-start mt-15 mb-5 text-lg">
          All rental rates are subject to 10% government tax & 2.5% booking fee.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Rates Table */}
          <div className="lg:col-span-7 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-teal-600 text-white font-semibold text-lg p-4">
              <div className="p-2">Rental Period</div>
              <div className="p-2 text-center">Minimum Stay</div>
              <div className="p-2 text-right">Rate Per Night</div>
            </div>

            {/* Map over rates array */}
            {booking_rate_start.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-3 p-4 text-gray-800 border-t border-gray-200 hover:bg-teal-50 hover:text-teal-700"
              >
                <div className="p-2 font-medium">{r.period}</div>
                <div className="p-2 text-center text-gray-600 hover:text-teal-700">
                  {r.min_stay}
                </div>
                <div className="p-2 text-right font-bold">
                  {formatCurrency(r.rate)}
                </div>
              </div>
            ))}
          </div>

          {/* Image Card */}
          <div className="lg:col-span-5 bg-white shadow-xl rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              onError={handleImageError}
              alt="Luxury sunset view with a glass of champagne"
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesBookingInformation;
