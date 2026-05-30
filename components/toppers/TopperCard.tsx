
import Image from "next/image";

type Props = {
  topper: {
    name: string;
    class: string;
    score: string;
    year: string;
    image: string;
  };
};

export default function TopperCard({
  topper,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white transition hover:-translate-y-2 hover:shadow-xl">
      <Image
        src={topper.image}
        alt={topper.name}
        width={500}
        height={400}
        className="h-[320px] w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#8B1E2D]">
          {topper.name}
        </h3>

        <p className="mt-2 text-gray-600">
          {topper.class}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-black">
            {topper.score}
          </span>

          <span className="text-sm text-gray-500">
            {topper.year}
          </span>
        </div>
      </div>
    </div>
  );
}
