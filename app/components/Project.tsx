import Icon from "@/app/components/Icon";
import ScrollReveal from "@/app/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="bg-second-color min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-[50px] lg:mb-[78px] md:text-center lg:text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white">
              Lastest <span className="text-primary-color">Project</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 -mx-[15px] gap-6 lg:gap-0">
            <div className="px-[15px]">
              <ScrollReveal className="group w-full h-full relative rounded-3xl flex overflow-hidden hover">
                <Image
                  src="/image/CMS.png"
                  width="300"
                  height="300"
                  alt="CMS"
                  className="w-full lg:h-[220px]"
                />
                <div className="group-hover:translate-y-0 text-white overlay absolute inset-0 bg-gradient-to-t from-overlay to-bg-primary h-full flex flex-col justify-center items-center text-center px-[4rem] translate-y-full duration-500 ease-in">
                  <h4 className="text-[20px] lg:text-[27px] font-bold">
                    CMS Admin
                  </h4>
                  <p className="text-[12px] lg:text-[14px] font-[500] mt-[4px] mb-[14px]">
                    The management system includes product category CRUD and
                    User authorization
                  </p>
                  <Link
                    href="https://github.com/lehai4/cMS"
                    className="inline-flex items-center justify-center w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem] bg-white rounded-full text-black"
                    target="_blank"
                  >
                    <Icon name="bx bx-link-external" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="px-[15px]">
              <ScrollReveal className="group w-full h-full relative rounded-3xl flex overflow-hidden hover">
                <Image
                  src="/image/ecommerce.png"
                  width="300"
                  height="300"
                  alt="Ecommerce"
                  className="w-full lg:h-[220px]"
                />
                <div className="group-hover:translate-y-0 text-white overlay absolute inset-0 bg-gradient-to-t from-overlay to-bg-primary w-full h-full flex flex-col justify-center items-center text-center px-[4rem] translate-y-full duration-500 ease-in">
                  <h4 className="text-[20px] lg:text-[27px] font-bold">
                    Ecommerce
                  </h4>
                  <p className="text-[12px] lg:text-[14px] font-[500] mt-[4px] mb-[14px]">
                    It&apos;s an online shopping website, freely choose the
                    product you like.
                  </p>
                  <Link
                    href="https://e-ecommerce-jade.vercel.app/"
                    className="inline-flex items-center justify-center w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem] bg-white rounded-full text-black"
                    target="_blank"
                  >
                    <Icon name="bx bx-link-external" />
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

export default Project;
