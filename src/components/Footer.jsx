function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-6 mt-10 shadow-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-lg md:text-xl font-medium">
          Made with <span className=" text-red-400">❤️</span> by{" "}
          <span className="font-semibold text-yellow-300 hover:text-yellow-200 transition-all duration-300">
            Piyush Patil
          </span>
        </h3>
        <p className="text-sm text-gray-200 mt-2">
          © {new Date().getFullYear()} Tikat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
