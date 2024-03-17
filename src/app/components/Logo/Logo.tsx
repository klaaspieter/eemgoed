import React from "react";
import styles from "./Logo.module.css";

export const Logo = (props: React.PropsWithChildren) => {
  return <div className={styles.logo}>{props.children}</div>;
};

export default Logo;
