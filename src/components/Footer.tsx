
const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src="https://spacegeneration.org/wp-content/uploads/2020/06/SGAC_New_Logo.png" 
            alt="SGAC Logo" 
            className="h-10 mr-3"
          />
          <div>
            <div className="text-xl font-bold">ACHIEVED Competition 2025</div>
            <div className="text-sm text-gray-400">Space Generation Advisory Council</div>
          </div>
        </div>
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} Space Generation Advisory Council</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
