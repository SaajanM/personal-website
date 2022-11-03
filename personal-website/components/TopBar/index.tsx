import HoverLink from "../HoverLink";
import styles from './topbar.module.css'

export default function TopBar() {
  return (
    <div className={styles.noselect}>
      <h1>
        Saajan Maslanka
      </h1>
      <ul className={styles.topbar}>
        <HoverLink href="/">Home</HoverLink>
        <li><a>|</a></li>
        <HoverLink href="/projects">Projects</HoverLink>
        <li><a>|</a></li>
        <HoverLink href="/files/resume.pdf">Resume</HoverLink>
        <li><a>|</a></li>
        <HoverLink href="https://www.linkedin.com/in/saajanm">LinkedIn</HoverLink>
        <li><a>|</a></li>
        <HoverLink href="https://github.com/SaajanM">Github</HoverLink>
      </ul>
    </div>
  );
}