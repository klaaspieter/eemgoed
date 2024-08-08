import fs from "fs/promises";
import path from "path";
import { micromark } from "micromark";
import React from "react";

export const getContent = React.cache(async (slug: string) => {
  const rawContent = await readFile(`/content/${slug}.md`);
  return micromark(rawContent);
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}
