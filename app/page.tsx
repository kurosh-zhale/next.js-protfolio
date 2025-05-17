import Hero from "@/components/hero";
import ProjectsGrid from "@/components/projects-grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";


export default async function Home() {
  const navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[] = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome/>
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <main
        className="relative bg-black-100 flex
       justify-centeritems-center flex-col 
       overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <ProjectsGrid></ProjectsGrid>
        </div>
      </main>
    </>
  );
}
