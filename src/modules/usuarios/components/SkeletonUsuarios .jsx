export default function SkeletonUsuarios() {
  return (
    <div className=" animate-pulse mx-auto max-w-screen-xl mt-4 px-4 lg:px-12">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="grid grid-cols-5 gap-4">
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
