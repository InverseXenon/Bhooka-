const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 animate-pulse">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>

            {/* Content Placeholder */}
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
