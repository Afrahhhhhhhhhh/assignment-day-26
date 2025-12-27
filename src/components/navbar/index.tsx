
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-10 py-4 flex items-center justify-between">
      <div className="font-bold text-xl md:text-2xl font-['Sour_Gummy']">
        Afrah's Biscuit
      </div>

      <ul className="hidden md:flex font-[Figtree] font-semibold items-center gap-8 text-sm">
        <li><a href="/home">HOME</a></li>
        <li><a href="/order">MENU</a></li>
        <li>ABOUT US</li>
        <li>PROMO</li>
        <li className="px-4 py-2 bg-[#F1DFE3] rounded-full"><a href="/login">LOG-IN</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
