export default function Footer() {
  return (
    <footer className="px-5 lg:px-16 py-2 sm:py-4 ">
      <div className=" bg-gray-50 rounded-lg shadow-xl border border-gray-200 sm:flex sm:items-center sm:justify-between p-4 sm:p-6 antialiased">
        <p className="text-sm text-center text-gray-500 sm:mb-0">
          &copy; 2019-2022
          <span
            className="hover:underline"
            target="_blank"
          >
            {/* josuepedev.com */}
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
