import FormContact from "@/app/components/Form";
import ScrollReveal from "@/app/components/ScrollReveal";
import { option, options } from "@/app/utils/optionHandler";

const Contact = () => {
  return (
    <div className="min-h-[100vh] h-full">
      <div className="pt-[108px] lg:px-[113px]">
        <div className="container">
          <ScrollReveal options={option}>
            <h2 className="mb-[50px] lg:mb-[78px] text-center text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
              Contact <span className="text-primary-color">Me</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal options={options}>
            <FormContact />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
