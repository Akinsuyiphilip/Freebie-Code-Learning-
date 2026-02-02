import logo from "../assets/logoicon.svg"
import menu from "../assets/MenuIcon.svg"
import { useState, useEffect, useRef } from "react"
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const closeMenu = () => setOpen(false);
        window.addEventListener("resize", closeMenu);
        return () => window.removeEventListener("resize", closeMenu);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className="w-full">
                {/* mobile screen */}

                <div className={`fixed top-0 left-0 right-0 z-60 flex justify-between w-full 2xl:max-w-7xl lg:items-start 2xl:mx-auto px-4 py-4 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>

                    <div className="flex items-center md:gap-6 lg:gap-10 gap-3">
                        <img src={logo} alt="" className="w-6 h-6 md:h-10 md:w-10" />
                        <h3 className="md:hidden text-xl font-bold text-black">macode.</h3>


                        {/* desktop screen */}
                        <div className=" md:flex hidden md:gap-1 lg:gap-4 font-thin text-[clamp(0.6rem,3vw,1rem)] leading-tight whitespace-nowrap">
                            <a href="#" className="hover:font-semibold">
                                Tutorials</a>
                            <a href="#" className="flex items-center md:gap-2 lg:gap-6 ">.
                                <span className="hover:font-semibold">
                                    Case studies</span></a>
                            <a href="#" className="flex items-center md:gap-2 lg:gap-6 ">.
                                <span className="hover:font-semibold">
                                    Resources</span></a>
                        </div>
                    </div>

                    <div ref={menuRef}>

                        <button className="md:hidden" onClick={() => setOpen(!open)}>
                            <img src={menu} alt="" className="w-6 h-6" />
                        </button>
                        {/* mobile screen */}

                        {open && (
                            <div className="absolute top-10 right-4 h-40 w-1/2 flex flex-col justify-between px-6 py-4 bg-[#ffffff] border border-[#00000046] rounded-b-2xl  font-thin text-lg md:hidden ">
                                <a href="#" className="hover:font-semibold">
                                    Tutorials</a>
                                <a href="#" className="hover:font-semibold">
                                    Case studies</a>
                                <a href="#" className="hover:font-semibold">
                                    Resources</a>
                            </div>
                        )}
                    </div>
                </div>

            </nav>
        </div>
    )
}