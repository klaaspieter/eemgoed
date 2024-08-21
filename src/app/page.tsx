import styles from "./page.module.css";

import { getContent } from "./content";

export default async function Home(props) {
  const article = await getContent("home.md");

  return (
    <>
      {/* <section className={styles.heroVideo}>
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
      </section> */}
      <section className={styles.heroImage}>
        <div className={styles.headings}>
          <h1>Eemgoed</h1>
        </div>
      </section>

      <article className="px-4 py-10 sm:px-0">
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: article }}
        />
      </article>
    </>
  );
}
