import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradiantAnimation";

export default function DisplayGrid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <div key={item.id}>
            <BentoGridItem
              className={item.className}
              description={item.description}
              title={item.title}
              header={
                item.img || item.spareImg ? (
                  <Image
                    src={item.img}
                    alt={
                      item.img
                        ? "display " + item.img
                        : "display " + item.spareImg
                    }
                    className={item.imgClassName}
                    width={400}
                    height={400}
                  />
                ) : (
                  <BackgroundGradientAnimation />
                )
              }
            ></BentoGridItem>
          </div>
        ))}
      </BentoGrid>
    </section>
  );
}
