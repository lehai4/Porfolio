import ScrollReveal from "@/app/components/ScrollReveal";
import SvgIcon from "@/app/components/SvgIcon";
import Title from "@/app/components/Title";

const Skill = () => {
  const options = {
    reset: true,
    duration: 3000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
  };
  return (
    <div className="min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <Title>
          <h2 className="mb-[50px] lg:mb-[78px] text-center text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
            Skills <span className="text-primary-color">Me</span>
          </h2>
        </Title>
        <ScrollReveal options={options}>
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <SvgIcon />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skill;
