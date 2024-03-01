import React from "react";
import styles from "./PageSection.module.css";

export const PageSection = (props: React.PropsWithChildren) => {
  return (
    <div className={styles.textBlock}>
      <section className={styles.blockWrapper}>{props.children}</section>
    </div>
  );
};

export default PageSection;
