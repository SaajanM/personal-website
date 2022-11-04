import styles from "./project.module.css"
import { VscGithub, VscGlobe } from 'react-icons/vsc'

type ProjectProps = {
  title: string,
  children: string,
  github?: string,
  deploy?: string
}
export default function Project(props: ProjectProps) {
  let hasLinks = props.github;
  return (
    <li className={styles.project}>
      <b>{props.title}</b>
      <br />
      <div className={styles.content}>
        <div className={styles.links}>
          {props.github ? <a href={props.github}><VscGithub /></a> : null}
          {props.deploy ? <a href={props.deploy}><VscGlobe /></a> : null}
        </div>
        <div className={styles.hindent}>
          {props.children}

        </div>
      </div>
    </li>
  );
}