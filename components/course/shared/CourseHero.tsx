type Props = {
  title: string;
  subtitle: string;
  description: string;
  primary: string;
  background: string;
};

export default function CourseHero({
  title,
  subtitle,
  description,
  primary,
  background,
}: Props) {
  return (
    <section
      className="min-h-[80vh] flex items-center"
      style={{
        backgroundColor: background,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p
          className="font-semibold text-lg mb-4"
          style={{ color: primary }}
        >
          {subtitle}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          {title}
        </h1>

        <p className="max-w-2xl text-lg text-gray-700 mb-8">
          {description}
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold"
            style={{
              backgroundColor: primary,
            }}
          >
            Enroll Now
          </button>

          <button className="px-8 py-4 rounded-full border border-black">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}