import { useState, useEffect } from "react";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 md:px-10 pointer-events-none">

      <nav
        className={`w-full max-w-[1160px] pointer-events-auto transition-all duration-300 rounded-[16px] border ${
          active
            ? "bg-[#0a0a10]/85 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            : "bg-[#0a0a10]/60 border-white/5"
        } backdrop-blur-xl`}
      >

        {/* TOP */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4">

          {/* LOGO */}
          <a
            href="#beranda"
            className="font-['Syne',sans-serif] font-bold text-[1.15rem] text-[#eeeef5] tracking-[-0.5px]"
          >
            Pyyt
            <em className="not-italic text-[#10d9a0]">
              .
            </em>
            DEV
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-9 list-none">

            {["beranda", "tentang", "tools", "proyek", "kontak"].map((menu) => (

              <li key={menu}>

                <a
                  href={`#${menu}`}
                  className="font-sans font-semibold text-[0.88rem] text-[#eeeef5]/70 hover:text-[#eeeef5] capitalize tracking-normal transition-colors duration-300 relative block py-1 group"
                >

                  {menu}

                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10d9a0] transition-all duration-300 group-hover:w-full"></span>

                </a>

              </li>

            ))}

          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px]"
          >

            <span
              className={`w-7 h-[2px] bg-white transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>

            <span
              className={`w-7 h-[2px] bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-7 h-[2px] bg-white transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>

          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[400px] border-t border-white/5"
              : "max-h-0"
          }`}
        >

          <div className="px-6 py-6 flex flex-col gap-5 bg-[#0f0f16]">

            {["beranda", "tentang", "tools", "proyek", "kontak"].map((menu) => (

              <a
                key={menu}
                href={`#${menu}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#eeeef5]/70 hover:text-[#10d9a0] capitalize font-medium transition duration-300"
              >
                {menu}
              </a>

            ))}

          </div>

        </div>

      </nav>

    </div>

  );
};

export default Navbar;