import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { gallery } from "@/data/gallery";
import GalleryCard from "../gallery/GalleryCard";

export default function MomentsPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Aspire Moments"
          subtitle="Memories, activities and learning experiences."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="rounded-full bg-[#8B1E2D] px-7 py-4 text-white"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}