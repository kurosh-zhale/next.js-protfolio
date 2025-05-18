import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-10 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento inline-block shadow-input row-span-1 py-9 px-6 space-y-4 relative rounded-3xl border  transition duration-200 hover:shadow-xl  bg-gradient-to-t from-[#04071D] to-[#0C0E23]  border-[#3637496E]",
        className
      )}
    >
      {header}
      <h3 className="mt-2 mb-2  font-sans font-bold text-white z-10">
        {title}
      </h3>
      <p className="font-sans text-xs font-normal text-[#BEC1DD] z-10">
        {description}
      </p>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
      </div>
    </div>
  );
};
