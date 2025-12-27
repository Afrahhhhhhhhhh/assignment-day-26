import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-10 py-4 flex items-center justify-between">
      <div className="font-bold text-xl md:text-2xl font-['Sour_Gummy']">
        Afrah's Biscuit
      </div>

      <ul className="hidden md:flex font-[Figtree] font-semibold items-center gap-8 text-sm">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/order">MENU</Link></li>
        <li><Link to="/login" className="px-4 py-2 bg-[#F1DFE3] rounded-full">LOG-IN</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
