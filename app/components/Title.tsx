import ScrollReveal from "@/app/components/ScrollReveal";

const Title = ({ children }: { children: React.ReactNode }) => {
  const optionH2 = {
    reset: true,
    duration: 900,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out",
  };
  return <ScrollReveal options={optionH2}>{children}</ScrollReveal>;
};

export default Title;
