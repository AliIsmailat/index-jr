interface ImageEntry {
  file: string;
  alt: string;
}

const srcSets = import.meta.glob<string>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
    query: {
      w: "240;480;800;1200;1600",
      format: "webp",
      as: "srcset",
      withoutEnlargement: true,
    },
  },
);

const sources = import.meta.glob<string>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
    query: { w: "1600", format: "webp", withoutEnlargement: true },
  },
);

const placeholders = import.meta.glob<string>(
  "/src/assets/placeholders/*.svg",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

function findByName(
  map: Record<string, string>,
  file: string,
): string | undefined {
  const wanted = file.toLowerCase();
  const path = Object.keys(map).find(
    (key) =>
      key
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "")
        .toLowerCase() === wanted,
  );
  return path ? map[path] : undefined;
}

interface PictureProps {
  image: ImageEntry;
  sizes: string;
  eager?: boolean;
  className?: string;
  width?: number;
  height?: number;
  natural?: boolean;
}

export function Picture({
  image,
  sizes,
  eager = false,
  className = "",
  width = 1600,
  height = 1067,
  natural = false,
}: PictureProps) {
  const src = findByName(sources, image.file);
  const srcSet = findByName(srcSets, image.file);
  const placeholder = findByName(placeholders, image.file);
  const url = src ?? placeholder;

  if (!url) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className="h-full w-full bg-line"
      />
    );
  }

  return (
    <img
      src={url}
      srcSet={src ? srcSet : undefined}
      sizes={src ? sizes : undefined}
      alt={image.alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "auto" : "async"}
      fetchPriority={eager ? "high" : "auto"}
      className={`${natural ? "block h-auto w-full" : "h-full w-full object-cover object-top"} ${className}`}
    />
  );
}
