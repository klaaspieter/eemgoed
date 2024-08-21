import fs from "fs/promises";
import path from "path";
import { micromark } from "micromark";
import React from "react";

const contentPath = path.join(process.cwd(), "content");

export const getContentNames = React.cache(async () => {
  const names = await fs.readdir(contentPath, { withFileTypes: true });

  return names
    .filter((item) => !item.isDirectory())
    .map((item) => path.parse(item.name).name);
});

export const getContent = React.cache(async (slug: string) => {
  const filePath = path.join(contentPath, `${slug}`);
  const rawContent = await fs.readFile(filePath, "utf8");
  return micromark(rawContent);
});
