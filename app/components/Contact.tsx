import FormContact from "@/app/components/Form";
import ScrollReveal from "@/app/components/ScrollReveal";
import Title from "@/app/components/Title";

const Contact = () => {
  return (
    <div className="min-h-[100vh] h-full">
      <div className="pt-[108px] lg:px-[113px] pb-[31px]">
        <div className="container">
          <Title>
            <h2 className="mb-[50px] lg:mb-[78px] text-center text-[22px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white">
              Contact <span className="text-primary-color">Me</span>
            </h2>
          </Title>
          <ScrollReveal>
            <FormContact />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
