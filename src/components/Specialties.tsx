import {
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaLandmark,
  FaIndustry,
  FaTree,
} from "react-icons/fa";

export default function Specialties() {
  const items = [
    { icon: <FaHome />, label: "Residencial" },
    { icon: <FaBuilding />, label: "Comercial" },
    { icon: <FaWarehouse />, label: "Industrial" },
    { icon: <FaLandmark />, label: "Patrimônio" },
    { icon: <FaIndustry />, label: "Empresarial" },
    { icon: <FaTree />, label: "Rural" },
  ];

  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Especialidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-4xl text-blue-700">{item.icon}</div>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
