import ScrollReveal from "@/app/components/ScrollReveal";
import Title from "@/app/components/Title";
import Image from "next/image";

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
                  className="rounded-full"
                />
              </ScrollReveal>
            </div>
            <div className="px-[15px] flex items-center">
              <ScrollReveal>
                <Title>
                  <h2 className="mb-[40px] lg:mb-[60px] text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
                    About <span className="text-primary-color">Me</span>
                  </h2>
                </Title>
                <p className="my-[30px] text-white text-[12px] sm:text-[14px] md:text-[16px]">
                  Good day, everyone! I&apos;m Le Chi Hai, I&apos;m 23 years old
                  and I&apos;m from TienGiang. I&apos;m Fresher Front-end
                  Developer. I have three months experience of working as a web
                  developer at HCMC.
                  <br />
                  <br /> I&apos;m often praised for my creativity and
                  independent working skills. I always put my heart and soul
                  into every single website that I develop. I guess that&apos;s
                  all I have to share about myself. Thank you for reading!
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
