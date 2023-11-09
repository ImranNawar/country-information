const Header = () => {
  return (
    <header className="bg-teal-300 text-black p-2 flex justify-between">
      <div className="flex items-center">
        <img src="globe.png" alt="logo" width="80px" height="80px" className="p-2"/>
        <div className="text-3xl font-bold">Country Information</div>
      </div>
      <div className="space-x-4 mt-11 mr-11">
        <a href="#" className="rounded-md bg-teal-500 px-3 py-2 text-lg font-serif font-semibold text-white shadow-sm hover:bg-teal-600">Home</a>
        <a href="#" className="rounded-md bg-teal-500 px-3 py-2 text-lg font-serif font-semibold text-white shadow-sm hover:bg-teal-600">About</a>
      </div>
    </header>
  );
};

export default Header;
