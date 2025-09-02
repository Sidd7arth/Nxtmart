import React from 'react'
import { Link } from "react-router-dom";

function PaymentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div>
          <img 
            src="https://img.icons8.com/?size=100&id=bE5mRAhk65Br&format=png&color=000000" 
            alt="Successful" 
            className="mx-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-4">Payment Successful</h1>
        </div>
        <p className="mt-2 text-gray-800 text-md">
          Thank you for your purchase!<br/> Your transaction has been completed.
        </p>
        <div>
          <Link to="/">
            <button className="mt-8 border rounded-lg bg-blue-400 px-6 py-2 font-serif text-white hover:bg-blue-500 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
