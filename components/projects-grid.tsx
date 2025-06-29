import { createClient } from "@/utils/supabase/server";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import Link from "next/link";
import headerImage from "@/assests/public/bg.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

type GridItem = {
  id: string | number;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
};

const ProjectsGrid = async () => {
  const supabase = await createClient();

  let { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);

    return <p id="projects">Unable to fetch projects!</p>;
  }

  const onClickAlert = () => {};

  return (
    <section id="projects" className="mt-20">
      <TextGenerateEffect
        words="A small selection of recent projects"
        className="text-center text-[30px] md:text-4xl lg:text-5xl mb-12"
      />

      <BentoGrid className="md:grid-rows-2 md:grid-cols-2">
        {projects?.map((project) => (
          <Link href={project.link} key={project.id} target="blanck_">
            <BentoGridItem
              className="w-full"
              description={project.description}
              title={project.title}
              icon=<>
                <div className=" w-full">
                  <p className="text-[#CBACF9]">
                    Check Live Site &nbsp;
                    <FaExternalLinkAlt className="inline" />
                  </p>
                </div>
              </>
              header=<div className="bg-[#13162D] flex justify-center rounded-lg overflow-hidden w-full h-1/2">
                <Image
                  src={headerImage}
                  alt={project.title + " background"}
                  width={500}
                  height={500}
                  className="object-cover absolute left-0"
                />
                <div className="rounded-lg flex relative top-10 rotate-6 bg-red-700 h-52 w-3/4">
                  <Image
                    src={project.display_img}
                    alt={project.title + " cover_image"}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            />
          </Link>
        ))}
      </BentoGrid>
    </section>
  );
};

export default ProjectsGrid;
