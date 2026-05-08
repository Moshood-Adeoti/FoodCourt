import { Link } from "react-router-dom";

let app = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfILv5pL50m7RPcHzK18E6bcO-uuDPJuMr7bIfCxW24A&s"
let play = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4PzcL50dTW9_WP447x5oU_zg9iAW3HvKHg&s"

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-[50px] px-[60px] bg-gradient-to-r from-[#e8f0fb] via-[#f9f9f9] to-[#fce8ec] fixed">

      {/* Left - Logo */}
      <h1 className="text-red-700 font-bold text-xl">
        <Link to="/">FOODCOURT</Link>
      </h1>

      {/* Center - Nav Links */}
      <ul className="flex items-center gap-[30px] text-black text-sm font-medium">
        <li><Link to="/about">About FC</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>

      {/* Right - App Store Icons */}
      <div className="flex items-center gap-[10px]">
        <a href="#">
          <img src={app} alt="App Store" className="w-[32px] h-[32px] rounded-full object-cover border border-gray-300" />
        </a>
        <a href="#">
          <img src={play} alt="Google Play" className="w-[32px] h-[32px] rounded-full object-cover border border-gray-300" />
        </a>
      </div>

    </nav>
  );
}

export default Navbar;