import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/gallery/GalleryCard";
import { gallery } from "@/data/gallery";

export default function MomentsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Aspire Moments"
          subtitle="A glimpse into student life, learning and achievements."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}