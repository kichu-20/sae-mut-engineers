import saeLogo from "@/assets/sae-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-dark/80 backdrop-blur-md border-b border-green-light/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={saeLogo} 
              alt="SAE Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="font-playfair text-xl font-bold text-golden">SAE MMMUT</h1>
              <p className="font-inter text-sm text-golden-light/80">Society of Automotive Engineers</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-inter text-golden-light hover:text-golden transition-colors duration-300">HOME</a>
            <a href="#about" className="font-inter text-golden-light hover:text-golden transition-colors duration-300">ABOUT</a>
            <a href="#activities" className="font-inter text-golden-light hover:text-golden transition-colors duration-300">ACTIVITIES</a>
            <a href="#contact" className="font-inter text-golden-light hover:text-golden transition-colors duration-300">CONTACT</a>
          </nav>
          
          <div className="md:hidden">
            <button className="text-golden-light hover:text-golden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;