export default function Projects() {
  return (
    <div>
      <h2>Current Projects</h2>
      <p>These projects are under works and do not have showcases</p>
      <ul>
        <li className="hindent">
          <b>TCR-Epitope Binding Prediction with ML</b>
          <br />
          I am developing a model to predict the binding affinity between TCR protein complexes
          and epitopes in the immune system with the ASU Biodesign Institute. This model
          will use a novel encoding system that utilizes AlphaFold 2's structural outputs as
          embeddings. We hope to achieve state of the art performance in the TCR-Epitope problem.
        </li>
        <li className="hindent">
          <b>Natural Terrain Generation for Games</b>
          <br />
          By utilizing hexagonal tilings of the Cartesian plane, my goal is to provide a robust
          multithreaded framework for realistic procedural terrain generation. To handle hierarchical
          needs of data and increase the density of storage, the project utilizes a procedure that
          decomposes one hexagon into seven on zoom. The tiles are indexed for fast querying in a
          spatial database. The backend is written in Rust and a sample client uses Unity with C#.
        </li>
        <li className='hindent'>
          <b>Data Compression via Learned Data Structures</b>
          <br />
          As part of the ASU CS Capstone Program, I am working closely with Professor Jia Zou and
          several other students to research and study the compressibility of large database systems.
          Currently, we are looking at the theoretical guarantees of neural networks in regards to
          learning a data distribution that underpins a query to a database. We are also aiming to
          improve upon existing methods of data compression as well as provide our own theoretical
          guarantees. There is an additional aim to submit to SIGMODs 2023 SRC.
        </li>
        <li className='hindent'>
          <b>Hydration Measuring Social Application</b>
          <br />
          I am currently working with a group of students to create a social media application that
          measures and shares water consumption with friends. The aim is to encourage healthy
          drinking habits amongst the populace. Key features include the ability to set and monitor
          hydration goals, view other users status, and gain seasonal bonus rewards based on region
          and time of year. This application will have a C# frontend and backend, interfacing with
          a PostgreSQL database to keep track of user information.
        </li>
      </ul>
    </div >
  );
}