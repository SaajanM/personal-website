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
        I am a passionate undergraduate student at Arizona State University, studying
        Computer Science and Mathematics. I enjoy studying novel ways to model and
        simulate multi agent systens, natural phenomena, and intelligent agents. Within
        the next couple years I hope to start a Ph.D with a focus in one of these topics.
      </p>
      <p>
        Outside of school, I enjoy hiking and rock climbing with friends. I'm also a
        foodie, eager to try new and exciting dishes. Ocasionally, I like to find litrpg
        fictions to read in order to help motivate my ideas for worlbuilding.
      </p>
      <h2>Interests & Exploratory Topics</h2>
      <ul>
        <li>
          Theoretical Computer Science
          <ul>
            <li>Advanced Algorithms</li>
            <li>Formal Languages</li>
            <li>Complexity Theory</li>
          </ul>
        </li>
        <li>
          Linear Algebra
          <ul>
            <li>Multilinear Algebra</li>
            <li>Tensors</li>
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
          Artificial Intelligence
          <ul>
            <li>Multi Agent Systems</li>
            <li>Neural Network Compression</li>
            <li>Neural Networks as Approximators</li>
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
      <p>For more details check out the projects tab</p>
      <ul>
        <li>TCR-Epitope Binding Prediction with ML</li>
        <li>Natural Terrain Generation for Games</li>
        <li>Data Compression via Learned Data Structures</li>
        <li>Hydration Measuring Social Application</li>
      </ul>
    </div>
  )
}
