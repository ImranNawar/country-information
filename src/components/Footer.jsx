import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-teal-300 text-black p-2 relative">
      <div className="flex items-center">
        <img src="globe.png" alt="logo" width="50px" height="50px" className="p-2"/>
        <div className="text-xl font-serif font-semibold">Country Information</div>
      </div>
      <p className="text-center">Copyright &copy; 2023 Imran</p>
      
      <button
        className="absolute bottom-4 right-4 bg-teal-500 p-2 rounded-full hover:bg-teal-600"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
}

export default Footer;