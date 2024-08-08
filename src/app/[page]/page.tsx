import { getContent } from "./../content";

import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";

export default async function Page({ params }) {
  // dynamicParams = false below should do this but it doesn't
  const filePath = `${path.resolve("./content")}/${params.page}.md`;
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const article = await getContent(`${params.page}`);

  return (
    <article className="bg-sandy-beach py-10">
      <div
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: article }}
      />
    </article>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const contentPath = path.resolve("./content");
  const filenames = fs.readdirSync(contentPath);

  return filenames.map((filename) => {
    filename;
  });
}
