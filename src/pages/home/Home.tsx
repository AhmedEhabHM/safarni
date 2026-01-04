import { HeroSection } from "../../components/hero/HeroSection";
import { CategoriesSection } from "../../components/categories";
import { Navbar } from "@/components/layout/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full max-w-[1240px] flex flex-col mx-auto px-4 sm:px-6 md:px-8 lg:px-0"
        style={{
          minHeight: "2000.94px",
          paddingTop: "166px",
          paddingBottom: "40px",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "80px",
        }}
      >
        <HeroSection />
        <CategoriesSection />
      </div>
    </>
  );
};
