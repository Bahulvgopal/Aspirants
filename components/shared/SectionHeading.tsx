type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-[#8B1E2D]">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}