import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "./hoverlink.module.css"
type TopBarLinkProps = {
  itemContent?: string
  href: string
  children: ReactNode
};
export default function HoverLink(props: TopBarLinkProps) {
  let router = useRouter();
  let className = styles.hover_underline_animation;
  if (router.asPath == props.href) className += ` ${styles.current_page}`
  return (
    <li className={className}><a href={props.href}>{props.itemContent ? props.itemContent : props.children}</a></li>
  );
}