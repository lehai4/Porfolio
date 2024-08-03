"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Icon } from "../index";
import ScrollReveal from "@/app/components/ScrollReveal";
import useViewPortWidth from "@/app/components/hook/useViewPortWidth";

const browser = typeof window !== undefined;

const Navbar: LinkNavbar[] = [
  { id: 0, path: "about", namePath: "About" },
  { id: 1, path: "skill", namePath: "Skills" },
  { id: 2, path: "projects", namePath: "Projects" },
  { id: 3, path: "contact", namePath: "Contact" },
];

const IconList = [
  {
    id: 0,
    path: "https://www.facebook.com/mi.yu.5682944/",
    icon: <Icon name="bx bxl-facebook" />,
  },
  {
    id: 1,
    path: "https://github.com/lehai4",
    icon: <Icon name="bx bxl-github" />,
  },
  {
    id: 2,
    path: "https://www.linkedin.com/in/le-chi-hai-84479829a/",
    icon: <Icon name="bx bxl-linkedin" />,
  },
  {
    id: 3,
    path: "mailto:chihaile4@gmail.com",
    icon: <Icon name="bx bxl-gmail" />,
  },
];

const Header = () => {
  const width = useViewPortWidth();
  const headerRef = useRef<HTMLDivElement>(null);
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
    <header id="header" className="bg-[#333] h-full relative">
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
                            className={`${
                              item.path === "about" ? "active" : ""
                            } hover:!text-primary-color transition-all duration-200 ease-out`}
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
        className={`home-section-background after:absolute after:bg-[rgba(0,0,0,.7)] after:left-0 after:top-0 after:w-full after:h-full after:-z-10`}
        data-stellar-background-ratio="0.6"
        style={{ backgroundPosition: `0% ${offsetScroll}px` }}
        ref={headerRef}
      >
        <ScrollReveal className="h-full">
          <div className="display-table">
            <div className="table-cell align-middle">
              <div className="container">
                <div className="text-center">
                  <div className="header-text">
                    <p className="text-[#f8f8f8] tracking-[4px] text-[15px] mt-[40px] mb-[20px]">
                      Hi, This is Le Chi Hai
                    </p>
                    <h2 className="text-white text-[30px] md:text-[35px] lg:text-[50px] tracking-[5px]">
                      <span className="typing">
                        I&apos;m {` `}
                        <span className="text-primary-color font-[700]">
                          <ReactTyped
                            strings={["Front end DEV"]}
                            typeSpeed={100}
                            loop
                            backSpeed={20}
                            showCursor={true}
                          />
                        </span>
                      </span>
                      <span className="typed-cursor">|</span>
                    </h2>
                    <div className="flex flex-row gap-8 justify-center items-center !mt-[40px]">
                      {IconList.map((i) => (
                        <Link
                          href={i.path}
                          key={i.id}
                          target="_blank"
                          className="inline-flex justify-center items-center w-[50px] h-[50px] bg-transparent rounded-full text-primary-color transition-all duration-500 ease-out hover:bg-primary-color hover:text-black hover:shadow-primary "
                          style={{ border: "0.2rem solid #00fbff" }}
                        >
                          {i.icon}
                        </Link>
                      ))}
                    </div>
                    <div className="!mt-[60px]">
                      <Link
                        href="/CVFrontEnd_LeChiHai.pdf"
                        target="blank"
                        download="CV"
                        className="mx-[30px] my-[15px] py-[14px] px-[45px] cursor-pointer inline-block tracking-[1px] relative transition-all duration-300 bg-primary-color text-black rounded-[50px] text-[20px] font-[600] hover:shadow-none shadow-primary"
                      >
                        Download CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      {offsetScroll > 150 && width < 768 && (
        <div className="fixed bottom-0 left-0 bg-black w-full z-50">
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
                        } hover:text-primary-color transition-all duration-200 ease-out`}
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
      )}
    </header>
  );
};

export default Header;
