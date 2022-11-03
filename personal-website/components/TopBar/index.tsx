import HoverLink from "../HoverLink";
import styles from './topbar.module.css'

const links = {
  "Home": "/",
  "Projects": "/projects",
  "Resume": "/files/resume.pdf",
  "LinkedIn": "https://www.linkedin.com/in/saajanm",
  "GitHub": "https://github.com/SaajanM",
};

//#region ConfigManip
const separator = (i: number) => (
  <li className={styles.separator} key={2 * i + 1}>|</li>
);

type LinkKeys = keyof typeof links;

const linkKVs: [LinkKeys, string][] = Object.keys(links).map((k) => [k as LinkKeys, links[k as LinkKeys]])
const linkElements = linkKVs.map(([k, v], i) => <HoverLink key={2 * i} href={v}>{k}</HoverLink>);
const intersperedElements = linkElements.reduce<JSX.Element[]>((a, v, i) => [...a, v, separator(i)], []).slice(0, -1);
//#endregion ConfigManip

export default function TopBar() {
  return (
    <div className={styles.noselect}>
      <h1>
        Saajan Maslanka
      </h1>
      <ul className={styles.topbar}>
        {intersperedElements}
      </ul>
    </div>
  );
}