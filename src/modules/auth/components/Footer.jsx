export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-2 sm:py-4 bg-gray-50">
      <div className=" bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 antialiased">
        <p className="text-sm text-center text-gray-500 sm:mb-0">
          &copy; 2019-2022
          <a
            href="https://flowbite.com/"
            className="hover:underline"
            target="_blank"
          >
            josuepedev.com
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
