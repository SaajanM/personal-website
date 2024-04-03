# Current Projects
These projects are under works and/or do not have showcases

## Tools for Teaching Theoretical Computer Science | github="https://github.com/DaymudeLab/CSE355-MachineDesign"
I helped Professor Joshua Daymude to develop Arizona State University's first online
offering of CSE355: Intro to Theoretical Computer Science. One of my responsibilities
was to develop a python library that students could use to practice the formal design
of DFAs, NFAs, and PDAs as described in Sipser's "Introduction To The Theory Of Computation"
3rd edition. With this library, students can test if machines accept strings, view state diagrams,
and even connect their solutions to Gradescope for easy classroom management.

## Natural Terrain Generation for Games
By utilizing hexagonal tilings of the Cartesian plane, my goal is to provide a robust
multithreaded framework for realistic procedural terrain generation. To handle hierarchical
needs of data and increase the density of storage, the project utilizes a procedure that
decomposes one hexagon into seven on zoom. The tiles are indexed for fast querying in a
spatial database. The backend is written in Rust and a sample client uses Unity with C#.

---
# Archived Projects
A list of past and postponed projects that lack production environments

## Novel LL1 Parsing Library | github="https://github.com/CS-Cafe/nocap"
The goal of this project was/is to learn more about formal languages. The aim was
to develop an all in one suite of tools that would enable developers to create LL1
languages. This would entail code generation in C++ for both a lexer and recursive
descent parser. The project is currently on indefinite postponement, but plans to
revamp it are in the works.

## Hydration Measuring Social Application
I worked with a group of students to create a social media application that
measures and shares water consumption with friends. The aim was to encourage healthy
drinking habits amongst users. Key features included the ability to set and monitor
hydration goals, view other users status, and gain seasonal bonus rewards based on region
and time of year. This application had a C# frontend and backend, interfacing with
a PostgreSQL database to keep track of user information.

## Data Compression via Learned Data Structures
As part of the ASU CS Capstone Program, I worked closely with Professor Jia Zou and
several other students to research and study the compressibility of large database systems.
We looked at the theoretical guarantees of neural networks in regards to learning data
distributions that underpin a query to a database. We are also aiming to improve
upon existing methods of data compression as well as provide our own theoretical
guarantees. You can find the conference paper <a href="https://arxiv.org/pdf/2401.12393.pdf">here</a>

---

# Published Projects
Projects that I would consider done and with a deployment or release

## Route Finding in One Direction Hallways | github="https://github.com/SaajanM/cchspathfinder", deploy="https://cchspath.saajanm.com"
During the COVID-19 lockdown, my school implemented a unidirectional hallway system
to reduce the spread of the disease. Realizing this would cause congestion in
hallways due to the time it would take students getting used to the situation,
my brother and I developed this app to help students find their way. The user
enters their class information into the options menu and then an overlay is
generated on the map showing directions and distance. This used Dijkstra's
algorithm to calculate paths and uses React for the UI.
