export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full fixed top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/#home" className="nav-items">
          Home
        </a>
        <a href="/#projects" className="nav-items">
          Projects
        </a>
        <a href="/#about" className="nav-items">
          About
        </a>
        <a
          href="/#contact"
          className="nav-items bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
