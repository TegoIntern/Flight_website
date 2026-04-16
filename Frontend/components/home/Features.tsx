import {
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <div id="learn-more" className="grid md:grid-cols-3 gap-10 mt-10">
      
      <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition duration-300">
        <PaperAirplaneIcon className="h-12 w-12 text-blue-900 mb-4" />
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Easy Booking
        </h3>
        <p className="text-gray-600">
          Search and book flights for employees in seconds.
        </p>
      </div>

      <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition duration-300">
        <BuildingOfficeIcon className="h-12 w-12 text-blue-900 mb-4" />
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Centralized Management
        </h3>
        <p className="text-gray-600">
          Manage all company travel in one dashboard.
        </p>
      </div>

      <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition duration-300">
        <ChartBarIcon className="h-12 w-12 text-blue-900 mb-4" />
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Real-Time Data
        </h3>
        <p className="text-gray-600">
          Access up to date pricing and analytics.
        </p>
      </div>

    </div>
  );
}