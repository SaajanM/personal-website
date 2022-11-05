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
        <Project key={p} title={project.title} deploy={project.deployment} github={project.github}>{project.description}</Project>
      )
    }
    res.push(
      <ProjectCollection collapsible={collection.collapsible} key={c} heading={collection.heading} description={collection.description}>{projects}</ProjectCollection>
    )
  }
  return res;
}

export default function Projects() {
  const { data } = useSWR<Data>('/api/get_projects', fetcher)
  const projects = mdToJSX(data);

  return (
    <>
      {/* <ProjectCollection collapsible heading="Current Projects" description="These projects are under works and do not have showcases">
        <Project title="TCR-Epitope Binding Prediction with ML">
          I am developing a model to predict the binding affinity between TCR protein complexes
          and epitopes in the immune system with the ASU Biodesign Institute. This model
          will use a novel encoding system that utilizes AlphaFold 2's structural outputs as
          embeddings. We hope to achieve state of the art performance in the TCR-Epitope problem.
        </Project>
        <Project title="Natural Terrain Generation for Games">
          By utilizing hexagonal tilings of the Cartesian plane, my goal is to provide a robust
          multithreaded framework for realistic procedural terrain generation. To handle hierarchical
          needs of data and increase the density of storage, the project utilizes a procedure that
          decomposes one hexagon into seven on zoom. The tiles are indexed for fast querying in a
          spatial database. The backend is written in Rust and a sample client uses Unity with C#.
        </Project>
        <Project title="Data Compression via Learned Data Structures">
          As part of the ASU CS Capstone Program, I am working closely with Professor Jia Zou and
          several other students to research and study the compressibility of large database systems.
          Currently, we are looking at the theoretical guarantees of neural networks in regards to
          learning a data distribution that underpins a query to a database. We are also aiming to
          improve upon existing methods of data compression as well as provide our own theoretical
          guarantees. There is an additional aim to submit to SIGMODs 2023 SRC.
        </Project>
        <Project title="Hydration Measuring Social Application">
          I am currently working with a group of students to create a social media application that
          measures and shares water consumption with friends. The aim is to encourage healthy
          drinking habits amongst the populace. Key features include the ability to set and monitor
          hydration goals, view other users status, and gain seasonal bonus rewards based on region
          and time of year. This application will have a C# frontend and backend, interfacing with
          a PostgreSQL database to keep track of user information.
        </Project>
      </ProjectCollection >
      <ProjectCollection collapsible heading="Archived Projects" description="A list of past and postponed projects that lack production environments">
        <Project title="Novel LL1 Parsing Library" github="https://github.com/CS-Cafe/nocap">
          The goal of this project was/is to learn more about formal languages. The aim was
          to develop an all in one suite of tools that would enable developers to create LL1
          languages. This would entail code generation in C++ for both a lexer and recursive
          descent parser. The project is currently on indefinite postponment, but plans to
          revamp it are in the works.
        </Project>
      </ProjectCollection>
      <ProjectCollection collapsible heading="Published Projects" description="Projects that I would consider done and with a deployment or release">
        <Project title="Routefinding in One Direction Hallways" github="https://github.com/SaajanM/cchspathfinder" deploy="https://cchspath.saajanm.com">
          During the COVID-19 lockdown, my school implemented a unidirectional hallway system
          to reduce the spread of the disease. Realizing this would cause congestion in
          hallways due to the time it would take students getting used to the situation,
          my brother and I developed this app to help students find their way. The user
          enters their class information into the options menu and then an overlay is
          generated on the map showing directions and distance. This used Djikstra's
          algorithm to calculate pathing and uses React for the UI.
        </Project>
      </ProjectCollection> */}
      {projects}
    </>
  );
}