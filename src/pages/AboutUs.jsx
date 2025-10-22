import About from "../components/About";
import Profile1 from "./Profile";
import ClassProfile from "./ClassProfile";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-12 border-b border-blue-200">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight mb-3 animate-fadeIn">
          About <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get to know more about our story, our values, and the amazing team
          behind our journey 🚀
        </p>
      </section>

      {/* About Description */}
      <section className="py-10 px-6 md:px-16">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
          <About />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-blue-50 border-t border-b border-blue-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Meet Our Team 👥
        </h2>

        <div className="flex flex-wrap justify-center gap-8 px-6 md:px-16">
          {/* Profile Cards */}
          <div className="bg-white w-72 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center p-6">
            <ClassProfile name={"Piyush"} />
          </div>

          
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;
