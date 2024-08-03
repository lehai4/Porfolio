import FormContact from "@/app/components/Form";
import ScrollReveal from "@/app/components/ScrollReveal";

const Contact = () => {
  return (
    <div className="min-h-[100vh] h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white pb-[65px] text-center">
              Contact <span className="text-primary-color">Me</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FormContact />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
