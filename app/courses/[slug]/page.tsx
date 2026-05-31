import { notFound } from "next/navigation";
import { courses } from "../../../data/courses";

import AspireNextLayout from "../../../components/course/layouts/AspireNextLayout";
import AspireEliteLayout from "../../../components/course/layouts/AspireEliteLayout";
import AspireSmartLayout from "../../../components/course/layouts/AspireSmartLayout";
import AspireScienceLayout from "../../../components/course/layouts/AspireScienceLayout";
import AspireCodexLayout from "../../../components/course/layouts/AspireCodexLayout";
import WaverSpaceLayout from "../../../components/course/layouts/WaverSpaceLayout";
import ShutterStudioLayout from "../../../components/course/layouts/ShutterStudioLayout";
import AspireMarathon from "../../../components/course/layouts/AspireMarathonLayout";
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return notFound();
  }

  switch (course.layout) {
    case "next":
      return <AspireNextLayout />;

    case "elite":
      return <AspireEliteLayout />;

    case "smart":
      return <AspireSmartLayout />;

    case "science":
      return <AspireScienceLayout />;

    case "codex":
      return <AspireCodexLayout />;

    case "marathon":
      return <AspireMarathon/>;
      
    case "waver":
      return <WaverSpaceLayout />;

    case "studio":
      return <ShutterStudioLayout />;

    default:
      return notFound();
  }
}