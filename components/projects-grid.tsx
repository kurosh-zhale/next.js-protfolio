import { createClient } from "@/utils/supabase/server";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import Link from "next/link";

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
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);

    return <p id="about">Unable to fetch projects!</p>;
  }

  return (
    <section id="about">
      <BentoGrid>
        {projects?.map((project) => (
          <Link
            href={"projects/" + project.id}
            title={`see ${project.title} details`}
            key={project.id}
            id={project.id}
          >
            <BentoGridItem
              description={project.description}
              title={project.title}
              header=<Image
                className="rounded-lg"
                src={project.display_img}
                alt={project.title + " image"}
                width={500}
                height={500}
              />
            />
          </Link>
        ))}
      </BentoGrid>
    </section>
  );
};

export default ProjectsGrid;
