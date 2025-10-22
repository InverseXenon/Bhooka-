import { useState } from "react";

const Section = ({ title, description, isVisible, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md p-4 mb-4 bg-white hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        <button
          onClick={onToggle}
          className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
        >
          {isVisible ? "Hide ↑" : "Show ↓"}
        </button>
      </div>
      {isVisible && (
        <p className="mt-3 text-gray-600 animate-fadeIn">{description}</p>
      )}
    </div>
  );
};

const InstaMangao = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const sections = [
    {
      id: "about",
      title: "About InstaMangao",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...",
    },
    {
      id: "team",
      title: "Team InstaMangao",
      description:
        "Our talented team works tirelessly to make InstaMangao the best platform for our users...",
    },
    {
      id: "careers",
      title: "Careers",
      description:
        "Join us to work on exciting projects and grow your career with a passionate team...",
    },
    {
      id: "product",
      title: "Product",
      description:
        "InstaMangao offers a seamless experience with innovative features for everyone...",
    },
    {
      id: "details",
      title: "Details",
      description:
        "Here are all the details about our services, mission, and how we operate efficiently...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-blue-700 animate-fadeIn">
        InstaMangao
      </h1>

      <div className="max-w-4xl mx-auto">
        {sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            description={section.description}
            isVisible={visibleSection === section.id}
            onToggle={() =>
              setVisibleSection(
                visibleSection === section.id ? "" : section.id
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default InstaMangao;
