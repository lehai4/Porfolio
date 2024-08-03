import ScrollReveal from "@/app/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-second-color min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 -mx-[15px] gap-10 lg:gap-0">
            <div className="px-[15px]">
              <ScrollReveal>
                <Image
                  src="/about.jpg"
                  width={500}
                  height={500}
                  quality={100}
                  alt="imageAbout"
                  className="relative after:absolute after:bg-[rgba(0,0,0,.7)] after:left-0 after:top-0 after:w-full after:h-full after:-z-10"
                />
              </ScrollReveal>
            </div>
            <div className="px-[15px] flex items-center">
              <ScrollReveal>
                <h2 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white">
                  About <span className="text-primary-color">Me</span>
                </h2>
                <p className="my-[30px] text-white">
                  A Front-End with a demonstrated history of working in a
                  fast-paced work environment | Bachelor of Information
                  Technology | Skilled in Front-End Development, Programming
                  Languages like Javascript, Typescript, C# and used to several
                  Framework ReactJs, NextJS.
                </p>
                <div className="lg:!mt-[60px]">
                  <Link
                    href="/"
                    target="blank"
                    className="my-[15px] py-[14px] px-[45px] cursor-pointer inline-block tracking-[1px] relative transition-all duration-300 bg-primary-color text-black rounded-[50px] text-[20px] font-[600] hover:shadow-none shadow-primary"
                  >
                    Read More
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
