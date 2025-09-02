import { FaSquarePinterest, FaTwitter, FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => (
  <div className="flex flex-col items-center bg-[#003f00] text-white text-center w-screen bottom-0 p-4   ">
    <p>
      For any queries, contact +91-9876543210 <br />
      or mail us help@nxtmart.co.in
    </p>
    <div className="w-[200px] flex items-center justify-evenly p-6">
      <FaFacebookSquare size={25} />
      <FaSquarePinterest size={25} />
      <FaTwitter size={25} />
      <FaInstagram size={25} />
    </div>
    <p>Copyright © 2025 NxtMart Grocery Supplies Pvt Ltd</p>
  </div>
);

export default Footer;
