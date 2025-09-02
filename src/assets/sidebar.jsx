import React, { useState } from "react";

function Sidebar({ categories, onCategoryClick }) {

  const [selected, setSelected] = useState([]);
  return (
    <aside className="w-64 bg-white text-black p-4 mt-[72px] overflow-y-auto max-h-[calc(100vh-72px)]">
      <h2 className="text-xl font-bold ml-4 mb-4 border-b border-gray-300 pb-2 text-green-600">
        Categories
      </h2>
      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <li
              key={cat.id || index}
              className={`px-3 py-2 rounded-lg font-semibold cursor-pointer mt-2 transition-colors duration-200
                ${selected === cat.id ? "bg-green-600 text-white" : "bg-white hover:bg-gray-100"}`}
              onClick={() => {
                setSelected(cat.id);
                onCategoryClick(cat.products || []);
              }}
            >
              {cat.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500 italic">No categories found</li>
        )}
      </ul>
    </aside>
  );
}
export default Sidebar;
