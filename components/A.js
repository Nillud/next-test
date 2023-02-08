import Link from "next/link";
import styles from '../styles/A.module.css';

export default function A({text, href}) {
  return (
    <Link className={styles.random} href={href}>{text}</Link>
  )
}