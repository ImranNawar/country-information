const Header = () => {
  return (
    <header className="bg-blue-300 text-black p-2 flex justify-between">
      <div className="flex items-center">
        <img src="globe.png" alt="logo" width="80px" height="80px" className="p-2"/>
        <div className="text-2xl font-bold">Country Information</div>
      </div>
      <div className="space-x-4 mt-11 mr-11">
        <a href="#" className="text-black text-lg font-serif hover:text-blue-600 mr-6">Home</a>
        <a href="#" className="text-black text-lg font-serif hover:text-blue-600 m-6">About</a>
      </div>

    </header>
  );
};

export default Header;
