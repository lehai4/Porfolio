"use client";
import useViewPortWidth from "@/app/components/hook/useViewPortWidth";
import Link from "next/link";
import { useEffect, useState } from "react";

const browser = typeof window !== undefined;

const Navbar: LinkNavbar[] = [
  { id: 0, path: "home", namePath: "Home" },
  { id: 1, path: "about", namePath: "About" },
  { id: 2, path: "skill", namePath: "Skills" },
  { id: 3, path: "projects", namePath: "Projects" },
  { id: 4, path: "contact", namePath: "Contact" },
];

const Header = () => {
  const width = useViewPortWidth();

  const [idScroll, setIdScroll] = useState<string>("");
  const [offsetScroll, setOffsetScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (browser) {
        setOffsetScroll(window.scrollY);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("ul > li > a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setIdScroll(id ?? "");
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("ul > li > a[href*=" + id + "]")
              ?.classList.add("active");
          });
        }
      });
    };
  }, []);
  return (
    <header id="header" className="bg-[#333] h-[80px] relative">
      <div
        className={`header-top ${
          offsetScroll >= 40 ? "navigation-background bg-black" : ""
        } w-full fixed left-0 top-0 z-50 transition-all duration-400 ease-out`}
      >
        <div className="container">
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <div className="logo transition-all duration-300 ease-out">
                <Link
                  href="/#"
                  className="block text-[14px] tracking-[6px] uppercase text-white font-[900]"
                >
                  Porfolio
                </Link>
              </div>
            </div>
            <div>
              <div className="navigation-menu h-full">
                <div className="navbar !m-0 h-full">
                  <div className="navbar-collapse collapse hidden lg:block">
                    <ul className="nav navbar-nav navbar-right">
                      {Navbar.map((item, i) => (
                        <li className={`relative block`} key={i}>
                          <Link
                            href={`#${item.path}`}
                            className={`hover:!text-primary-color transition-all duration-200 ease-out`}
                          >
                            {item.namePath}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed translate-y-[100%] ${
          offsetScroll > 150 && width < 768 ? "!-translate-y-0" : ""
        } left-0 bottom-0 bg-black w-full z-50 transition-all duration-400 ease-out`}
      >
        <div className="h-full">
          <div className="navbar !m-0 h-full flex items-center justify-center sm:flex sm:items-center sm:justify-center">
            <div className="navbar-collapse collapse block lg:hidden">
              <ul className="nav navbar-nav navbar-right">
                {Navbar.map((item, i) => (
                  <li className={`relative block text-white`} key={i}>
                    <Link
                      href={`#${item.path}`}
                      className={`${
                        item.path === idScroll ? "text-primary-color" : ""
                      } hover:text-primary-color transition-all duration-200 ease-out !px-2 `}
                    >
                      {item.namePath}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
