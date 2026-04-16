export default function HowItWorks() {
  return (
    <div className="mt-24 text-center px-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h4 className="font-semibold text-lg mb-2">1. Search Flights</h4>
          <p className="text-gray-600">Find flights quickly by destination and date.</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">2. Book Instantly</h4>
          <p className="text-gray-600">Reserve flights for employees with one click.</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">3. Manage Trips</h4>
          <p className="text-gray-600">Track and manage all bookings in one dashboard.</p>
        </div>

      </div>
    </div>
  );
}