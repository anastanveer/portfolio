import Image from "next/image";
import { cn } from "@/lib/utils";

export function VisualPanel({
  src,
  alt,
  label,
  priority = false,
  className
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="aspect-[16/10] h-auto w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.018] sm:h-56 sm:aspect-auto md:aspect-[16/9] md:h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/58 via-black/8 to-transparent light:from-slate-950/32 light:via-transparent" />
      {label ? (
        <div className="absolute bottom-3 left-3 right-3 hidden rounded-xl bg-black/42 p-3 text-xs font-medium leading-5 text-white backdrop-blur-md light:bg-slate-950/60 sm:bottom-5 sm:left-5 sm:right-5 sm:block sm:p-4 sm:text-sm sm:leading-6">
          {label}
        </div>
      ) : null}
    </div>
  );
}
