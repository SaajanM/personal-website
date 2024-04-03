import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footnotes from '../components/Footnotes'
import TopBar from '../components/TopBar'

export default function Home() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am a software engineer currently working at Amazon on Project Kuiper.
        I have a Bachelor's in both Computer Science and Mathematics. Outside of work,
        I enjoy developing tools for computer science education as well as
        studying novel ways to model/simulate natural phenomena.
      </p>
      <p>
        In my spare time, I enjoy hiking and rock climbing with friends. I'm also a
        foodie, eager to try new and exciting dishes. Occasionally, I like to find LitRPG
        fictions to read in order to help motivate my ideas for world-building and other
        creative pursuits.
      </p>
      <h2>Interests & Exploratory Topics</h2>
      <ul>
        <li>
          Theoretical Computer Science
          <ul>
            <li>Automata Theory</li>
            <li>Computability Theory</li>
            <li>Complexity Theory</li>
          </ul>
        </li>
        <li>
          Computational Modeling
          <ul>
            <li>Discrete Time Simulation</li>
            <li>Bayesian Networks</li>
            <li>Markov Chains</li>
          </ul>
        </li>
        <li>
          Game Theory
          <ul>
            <li>Stochastic Environments</li>
            <li>Evolutionary Agents</li>
          </ul>
        </li>
      </ul>
      <h2>Current Projects</h2>
      <p>For more details check out the <a href='/projects'>projects</a> tab</p>
      <ul>
        <li>Teaching Tools for Theoretical Computer Science</li>
        <li>Natural Terrain Generation for Games</li>
      </ul>
    </div>
  )
}
