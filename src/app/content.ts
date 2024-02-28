import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

export const getContent = React.cache(async (slug: string) => {
  const rawContent = await readFile(`/content/${slug}.mdx`);
  const { data: frontmatter, content } = matter(rawContent);
  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}
