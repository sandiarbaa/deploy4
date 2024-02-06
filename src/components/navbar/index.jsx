function Navbar() {
  return (
    <nav className="w-full py-3 px-5 bg-slate-500 flex justify-between fixed">
      <div className="flex gap-x-2 items-center">
        <div className="kotak1 h-6 w-6 rounded-full bg-red-500 border border-black"></div>
        <div className="kotak2 h-6 w-6 rounded-full bg-yellow-500 border border-black"></div>
        <div className="kotak3 h-6 w-6 rounded-full bg-green-500 border border-black"></div>
      </div>
      <ul className="flex items-center gap-x-4 text-lg font-semibold text-white">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="border px-4 py-1 rounded-md bg-green-500 hover:bg-green-700 duration-300 cursor-pointer">
          Login
        </li>
        <li className="border px-4 py-1 rounded-md bg-slate-800 hover:bg-slate-600 duration-300 cursor-pointer">
          Logout
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
