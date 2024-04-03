import Project from "../components/Project/project";
import ProjectCollection from "../components/ProjectCollection/projectcollection";
import { Data } from "./api/get_projects"
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json())

const mdToJSX = (data?: Data,) => {
  if (!data) return;
  let res: JSX.Element[] = []
  for (let c = 0; c < data.categories.length; c++) {
    let collection = data.categories[c];
    let projects: JSX.Element[] = []
    for (let p = 0; p < collection.projects.length; p++) {
      let project = collection.projects[p];
      projects.push(
        <Project key={p} title={project.title} deploy={project.deploy} github={project.github}>{project.description}</Project>
      )
    }
    res.push(
      <ProjectCollection startCollapsed={c != 0} collapsible={collection.collapsible} key={c} heading={collection.heading} description={collection.description}>{projects}</ProjectCollection>
    )
  }
  return res;
}

export default function Projects() {
  const { data } = useSWR<Data>('/api/get_projects', fetcher)
  const projects = mdToJSX(data);

  return (
    <>
      {projects}
    </>
  );
}