import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import styles from "./projectcollection.module.css"

type ProjectCollectionProps = {
  heading: string,
  description?: string,
  children?: ReactNode
  collapsible?: boolean
  startCollapsed?: boolean
}

export default function ProjectCollection(props: ProjectCollectionProps) {
  let [collapsed, setCollapsed] = useState(props.startCollapsed ?? true);
  let [contentHeight, setContentHeight] = useState(0);
  let contentRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.clientHeight)
  })

  let classes: string[] = [];
  let newStyle: CSSProperties = {};
  if (props.collapsible) classes.push(styles.collapsible_header);
  if (collapsed) classes.push(styles.collapsed);
  if (!collapsed) newStyle.maxHeight = `calc(${contentHeight}px + 2em)`;

  return (
    <div className={classes.join(" ")}>
      <h2 onClick={() => { setCollapsed(p => !p) }}>{props.heading}</h2>
      {props.description}
      <div style={newStyle}>
        <ul ref={contentRef}>
          {props.children}
        </ul>
      </div>
    </div>
  );
}