import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./assets/navbar";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar isActive="cart" />
      <div className="p-6 mt-20 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <img
              src="https://res.cloudinary.com/datm0tjmq/image/upload/v1755015549/Frame_12217_1_usr1gj.png"
              alt="Empty Cart"
              className="w-72 mb-4"
            />
            <h2 className="text-gray-500">Your cart is empty!</h2>
            <Link
              to="/"
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-lg shadow bg-white"
                > 
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Total:</h2>
                <h2 className="text-2xl font-bold text-green-600">₹{total}</h2>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                >
                  Clear Cart
                </button>

                <Link
                  to="/paymentpage"
                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 text-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
