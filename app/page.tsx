import DisplayGrid from "@/components/display-gird";
import { navItems } from "@/data";
import Hero from "@/components/hero";
import ProjectsGrid from "@/components/projects-grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default async function Home() {
  navItems.map((item, index) => {
    if (index === 1) return { ...item, icon: <FaHome /> };
  });

  return (
    <>
      <main
        className="relative bg-black-100 flex
       justify-centeritems-center flex-col 
       overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          {/* <DisplayGrid></DisplayGrid> */}
          <ProjectsGrid></ProjectsGrid>
        </div>
      </main>
    </>
  );
}
