import { kMaxLength } from "buffer";
import { GetServerSideProps } from "next";
import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";
import { remark } from "remark";
import html from "remark-html";

export default async function Home() {
  const mdPath = path.join(process.cwd(), "app", "text.md");
  const markdown = await fs.readFile(mdPath, "utf8");
  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  return (
    <main className="flex min-h-screen flex-col items-leading p-12 prose dark:prose-invert">
      <h1>Het Eemgoed</h1>
      <h2>Dorpslandgoed van leven in verbinding</h2>

      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
