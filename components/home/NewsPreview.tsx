import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { news } from "@/data/news";

export default function NewsPreview() {
  const featured = news[0];
  const sideNews = news.slice(1, 4);

  return (
    <section className="news-premium-section section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Latest News & Updates"
          subtitle="Stay informed with Aspire's achievements, announcements and academic milestones."
        />

        <div className="news-premium-grid">
          {/* Featured News */}
          <article className="featured-news-card">
            <div className="featured-badge">
              Featured Update
            </div>

            <span className="featured-date">
              {featured.date}
            </span>

            <h2 className="featured-title">
              {featured.title}
            </h2>

            <p className="featured-description">
              {featured.description}
            </p>

            <Link
              href={`/news/${featured.id}`}
              className="featured-button"
            >
              Read Full Story →
            </Link>
          </article>

          {/* Side News */}
          <div className="side-news-wrapper">
            {sideNews.map((item) => (
              <article
                key={item.id}
                className="side-news-card"
              >
                <span className="side-date">
                  {item.date}
                </span>

                <h3 className="side-title">
                  {item.title}
                </h3>

                <p className="side-description">
                  {item.description}
                </p>

                <Link
                  href={`/news/${item.id}`}
                  className="side-link"
                >
                  Explore →
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="news-footer">
          <Link
            href="/news"
            className="view-all-news-btn"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}