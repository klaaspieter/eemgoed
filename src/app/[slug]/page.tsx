import { getContent, getContentNames } from "./../content";

export const dynamicParams = false;
export const generateStaticParams = async () => {
  const names = await getContentNames();

  return names.map((slug) => ({ slug }));
};

export default async function Page({ params }) {
  const article = await getContent(`${params.slug}.md`);

  return (
    <article className="py-10">
      <div
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: article }}
      />
    </article>
  );
}
