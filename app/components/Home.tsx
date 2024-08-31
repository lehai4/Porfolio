"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import ScrollReveal from "@/app/components/ScrollReveal";
import { Icon } from "@/app/components";

const browser = typeof window !== undefined;

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
const Home = () => {
  const headerRef = useRef<HTMLDivElement>(null);
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
  return (
    <div
      className={`home-section-background min-h-[100vh] flex justify-center items-center after:absolute after:bg-[rgba(0,0,0,.7)] after:left-0 after:top-0 after:w-full after:h-full after:-z-10`}
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
                  </h2>
                  <div className="flex flex-row gap-8 justify-center items-center !mt-[40px]">
                    {IconList.map((i) => (
                      <Link
                        href={i.path}
                        key={i.id}
                        target="_blank"
                        className="inline-flex justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-transparent rounded-full text-primary-color transition-all duration-500 ease-out hover:bg-primary-color hover:text-black hover:shadow-primary "
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
                      className="mx-[30px] my-[15px] py-[14px] px-[45px] cursor-pointer inline-block tracking-[1px] relative transition-all duration-300 bg-primary-color text-black rounded-[50px] text-[14px] md:text-[18px] lg:text-[20px] font-[600] hover:shadow-none shadow-primary"
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
  );
};

export default Home;
