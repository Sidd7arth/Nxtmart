// import React from 'react'
// import { useNavigate } from "react-router-dom";    

function ErrorPage() {
    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border-2 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" onClick={() => window.location.href = '/'}>
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </div>
            <img src="https://res.cloudinary.com/datm0tjmq/image/upload/v1754312311/Group_7504_pzhanc.png" alt="Error 404"/>
        </div>
    );
}

export default ErrorPage;
