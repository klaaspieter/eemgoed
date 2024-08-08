import styles from "./page.module.css";

import { getContent } from "./content";

export default async function Home() {
  const article = await getContent("home");

  return (
    <>
      <section className={styles.heroVideo}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          playsInline
          loop
          muted
          src="DJI_0238.MP4"
        />{" "}
        <div className="headings">
          <h1>Eemgoed</h1>
          <h2>
            82&nbsp;woningen &bull; 10&nbsp;landschapskamers &bull;
            1&nbsp;gemeenschappelijk huis
          </h2>
        </div>
      </section>

      <article className="bg-sandy-beach py-10">
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: article }}
        />
      </article>
    </>
  );
}
