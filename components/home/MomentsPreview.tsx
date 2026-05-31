import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { gallery } from "@/data/gallery";

export default function MomentsPreview() {
  const featured = gallery[0];
  const sideImages = gallery.slice(1, 5);

  return (
    <section className="moments-luxury section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Aspire Moments"
          subtitle="Memories, activities and learning experiences."
        />

        <div className="moments-masonry">
          {/* Large Featured Image */}
          <div className="moment-large">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="moment-image"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Side Images */}
          <div className="moments-side">
            {sideImages.map((item, index) => (
              <div
                key={item.id}
                className={`moment-small${index >= 2 ? " moment-small--hide-mobile" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="moment-image"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-cta">
          <Link
            href="/gallery"
            className="gallery-view-btn"
          >
            View Gallery
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .moment-small--hide-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}