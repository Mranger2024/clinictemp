import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
