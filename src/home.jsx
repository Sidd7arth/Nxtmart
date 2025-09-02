import React, { useEffect, useState } from "react";
import ProductCard from "./assets/products";
import Navbar from "./assets/navbar";
import Footer from "./footer";


const categoryIcons = {
};
function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://apis2.ccbp.in/nxt-mart/category-list-details")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories || []);
        setProducts(data.categories?.[0]?.products || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isActive="home" />

      <div className="flex flex-1">
        {/* Sidebar for md+ devices */}
        <aside className="hidden md:block w-64 bg--200 text-black p-4 mt-[72px] overflow-scroll-y border-r">
          <h2 className="text-xl font-bold ml-4 mb-4 border-b border-gray-300 pb-2 text-green-600">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li
                key={cat.id || index}
                className="px-3 py-2 rounded-lg hover:bg-gray-100 font-semibold cursor-pointer mt-2 flex items-center"
                onClick={() => setProducts(cat.products || [])}
              >
                {categoryIcons[cat.name] || null}
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile toggle button */}
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-yellow-200 shadow p-2 z-20 flex justify-between items-center">
          <span className="font-bold text-green-600">Categories</span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            {sidebarOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed top-[112px] left-0 w-full bg-white p-4 shadow z-10 md:hidden">
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li
                  key={cat.id || index}
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 font-semibold cursor-pointer mt-2 flex items-center"
                  onClick={() => {
                    setProducts(cat.products || []);
                    setSidebarOpen(false);
                  }}
                >
                  {categoryIcons[cat.name] || null}
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main content */}
        <main
          className={`flex-1 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
          ${sidebarOpen ? "mt-[200px]" : "mt-[72px]"}`}
        >
          {loading ? (
            <div className="flex items-center justify-center col-span-full">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
              >
                <path
                  d="M100 50.59C100 78.2 77.6 100.59 50 100.59C22.38 100.59 0 78.2 0 50.59C0 22.97 22.38 0.59 50 0.59C77.6 0.59 100 22.97 100 50.59Z"
                  fill="currentColor"
                />
                <path
                  d="M93.96 39.04C96.39 38.4 97.86 35.91 97.00 33.55C95.29 28.82 92.87 24.36 89.81 20.34C85.84 15.11 80.88 10.72 75.21 7.41C69.54 4.10 63.27 1.94 56.76 1.05C51.76 0.36 46.69 0.44 41.73 1.27C39.26 1.69 37.81 4.19 38.45 6.62C39.08 9.04 41.56 10.47 44.05 10.10C47.85 9.54 51.71 9.52 55.54 10.04C60.86 10.77 65.99 12.54 70.63 15.25C75.27 17.96 79.33 21.56 82.58 25.84C84.91 28.91 86.79 32.29 88.18 35.87C89.08 38.21 91.54 39.67 93.96 39.04Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={`${product.price}`}
                weight={product.weight}
                // onAdd={() => addToCart(product)} // NEW

              />
            ))
          )}
        </main>
      </div>

      <Footer />
    </div>
  );

}
export default Home;
