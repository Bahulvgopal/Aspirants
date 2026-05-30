
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

export default function GalleryCard({
  image,
  title,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white transition hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="p-5">
        <h3 className="font-semibold text-[#8B1E2D]">
          {title}
        </h3>
      </div>
    </div>
  );
}
