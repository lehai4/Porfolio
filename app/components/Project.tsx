import ScrollReveal from "@/app/components/ScrollReveal";
import Title from "@/app/components/Title";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const options = {
    reset: true,
    duration: 900,
    origin: "bottom",
    distance: "100px",
    easing: "ease-in-out",
  };
  return (
    <div className="bg-second-color min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <div className="container">
          <Title>
            <h2 className="mb-[50px] lg:mb-[78px] text-center text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
              Lastest <span className="text-primary-color">Project</span>
            </h2>
          </Title>
          <ScrollReveal options={options}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-[15px] gap-6 lg:gap-0">
              <div className="px-[15px] h-full">
                <div className="hover:shadow-subprimary transition-transform relative rounded-[20px] p-[1rem] border h-full max-h-full overflow-hidden shadow-primary bg-[rgba(60,60,60,.4)] z-[8] text-[12px] sm:text-[14px] md:text-[16px] after:absolute after:left-0 after:top-0 after:z-[2] after:origin-[100%] after:animate-skeleton after:h-[170px] after:w-[210%] after:bg-linear-gradient-custom-pattern after:hover:opacity-0">
                  <Image
                    src="/image/CMS.png"
                    width="300"
                    height="300"
                    alt="CMS"
                    className="w-full lg:h-[220px] rounded-[10px]"
                  />
                  <div className="text-white mt-[1.3rem]">
                    <h2 className="text-primary-color font-bold">CMS AdMin</h2>
                    <div className="mt-[5px] mb-[4rem]">
                      <span className="text-[#2295f9] font-semibold">
                        Personal project
                      </span>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Team size:&nbsp;
                        </span>
                        1.
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Technologies:&nbsp;
                        </span>
                        Type-script, React Vite, TailwindCss, Ant Design,
                        ReduxToolkit, Axios Instances.
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Functions such as:&nbsp;
                        </span>
                        An admin panel featuring authentication and product
                        management, change personal profile, and dark mode for
                        enhance user expercience.
                      </section>
                    </div>
                    <div className="absolute bottom-0 left-0 p-[1rem] flex justify-between w-full items-center">
                      <button className="z-[3] w-full bg-red-500 py-[10px] rounded-[20px] cursor-pointer overflow-hidden relative text-center before:absolute before:bg-inherit before:inset-0 before:rounded-inherit before:h-full before:w-full before:-z-[1] before:bg-size before:bg-linear-gradient-run-color after:m-[3px] after:absolute after:bg-inherit after:inset-0 after:rounded-inherit after:-z-[1] before:hover:animate-rainbow-border">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-[15px] h-full">
                <div className="hover:shadow-subprimary transition-transform relative rounded-[20px] p-[1rem] border h-full max-h-full overflow-hidden shadow-primary bg-[rgba(60,60,60,.4)] z-[8] text-[12px] sm:text-[14px] md:text-[16px] after:absolute after:left-0 after:top-0 after:z-[2] after:origin-[100%] after:animate-skeleton after:h-[170px] after:w-[210%] after:bg-linear-gradient-custom-pattern after:hover:opacity-0">
                  <div className="relative z-[1]">
                    <Image
                      src="/image/ecommerce.png"
                      width="300"
                      height="300"
                      alt="CMS"
                      className="w-full lg:h-[220px] rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-lightOverlay w-ful h-full z-[2]"></div>
                  </div>
                  <div className="text-white mt-[1.3rem]">
                    <h2 className="text-primary-color font-bold">Ecommerce</h2>
                    <div className="mt-[5px] mb-[4rem]">
                      <span className="text-[#2295f9] font-semibold">
                        Personal project
                      </span>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Team size:&nbsp;
                        </span>
                        1.
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Technologies:&nbsp;
                        </span>
                        Typescript, NextJs, Next-Auth, Ant Design, MongoDB,
                        Redux-Toolkit, JWT Token.
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Functions such as:&nbsp;
                        </span>
                        SignIn/SignOut with Credentials or Google, search
                        products, get products, view products, filter products,
                        review product, cart and payment cart.
                      </section>
                    </div>
                    <div className="absolute bottom-0 left-0 p-[1rem] flex justify-between w-full items-center gap-4">
                      <button
                        className="z-[3] w-full bg-red-500 py-[10px] rounded-[20px] cursor-pointer overflow-hidden relative text-center before:absolute before:bg-inherit before:inset-0 before:rounded-inherit before:h-full before:w-full before:-z-[1] 
                    before:bg-size before:bg-linear-gradient-run-color after:m-[3px] after:absolute after:bg-inherit after:inset-0 after:rounded-inherit after:-z-[1] before:hover:animate-rainbow-border"
                      >
                        Watch Demo
                      </button>
                      <Link
                        href="https://e-ecommerce-jade.vercel.app/"
                        target="_blank"
                        className="z-[3] w-full bg-[#2295f9] py-[10px] rounded-[20px] cursor-pointer overflow-hidden relative text-center before:absolute before:bg-inherit before:inset-0 before:rounded-inherit before:h-full before:w-full before:-z-[1] before:bg-size before:bg-linear-gradient-run-color after:m-[3px] after:absolute after:bg-inherit after:inset-0 after:rounded-inherit after:-z-[1] before:hover:animate-rainbow-border"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-[15px] h-full">
                <div className="hover:shadow-subprimary transition-transform relative rounded-[20px] p-[1rem] border h-full max-h-full overflow-hidden shadow-primary bg-[rgba(60,60,60,.4)] z-[8] text-[12px] sm:text-[14px] md:text-[16px] after:absolute after:left-0 after:top-0 after:z-[2] after:origin-[100%] after:animate-skeleton after:h-[170px] after:w-[210%] after:bg-linear-gradient-custom-pattern after:hover:opacity-0">
                  <div className="relative z-[1]">
                    <Image
                      src="/image/chat.png"
                      width="300"
                      height="300"
                      alt="CMS"
                      className="w-full lg:h-[220px] rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-lightOverlay w-ful h-full z-[2]"></div>
                  </div>
                  <div className="text-white mt-[1.3rem]">
                    <h2 className="text-primary-color font-bold">
                      Messenger Chat Web
                    </h2>
                    <div className="mt-[5px] mb-[4rem]">
                      <span className="text-[#2295f9] font-semibold">
                        Personal project
                      </span>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Team size:&nbsp;
                        </span>
                        1.
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Technologies:&nbsp;
                        </span>
                        ReactJs, Typescript, NodeJs, MongoDB, Socket.io,
                        Cloudinary
                      </section>
                      <section>
                        <span className="text-[#2295f9] font-semibold">
                          - Functions such as:&nbsp;
                        </span>
                        SignIn/SignOut, chat messages with other user, search by
                        username, change darkmode, send file and send emoji.
                      </section>
                    </div>
                    <div className="absolute bottom-0 left-0 p-[1rem] flex justify-between w-full items-center gap-4">
                      <button
                        className="z-[3] w-full bg-red-500 py-[10px] rounded-[20px] cursor-pointer overflow-hidden relative text-center before:absolute before:bg-inherit before:inset-0 before:rounded-inherit before:h-full before:w-full before:-z-[1] 
                    before:bg-size before:bg-linear-gradient-run-color after:m-[3px] after:absolute after:bg-inherit after:inset-0 after:rounded-inherit after:-z-[1] before:hover:animate-rainbow-border"
                      >
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Project;
