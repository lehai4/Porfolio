import ScrollReveal from "@/app/components/ScrollReveal";
import SvgIcon from "@/app/components/SvgIcon";

const Skill = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <ScrollReveal>
          <h2 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white mb-[50px] lg:pb-[65px] text-center">
            Skills <span className="text-primary-color">Me</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal className="pb">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SvgIcon />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skill;
