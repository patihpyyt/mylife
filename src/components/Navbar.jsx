import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Wrapper luar tanpa fixed-width biar ga nge-bug di screen edge
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 md:px-10 pointer-events-none">
      <nav className="w-full max-w-[1160px] flex items-center justify-between px-6 md:px-10 py-4 bg-[#0a0a10]/60 backdrop-blur-xl border border-white/5 rounded-[16px] pointer-events-auto">
        {/* LOGO */}
        <div className="font-['Clash_Display'] font-bold text-[1.15rem] text-[#eeeef5] tracking-[-0.5px]">
         <div className="font-['Syne',_sans-serif] font-bold text-[1.15rem] text-[#eeeef5] tracking-[-0.5px]">
  IQ<em className="not-italic text-[#10d9a0]">.</em>DEV
</div>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {["beranda", "tentang", "tools", "proyek", "kontak"].map((menu) => (
            <li key={menu}>
              <a
                href={`#${menu}`}
                className="font-sans font-semibold text-[0.88rem] text-[#eeeef5]/70 hover:text-[#eeeef5] capitalize tracking-normal transition-colors duration-250 relative block py-1 group"
              >
                {menu}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10d9a0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;