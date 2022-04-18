import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WordBlog = styled.h1`
  color: #677ce2;
`

const Para = styled.p`
  font-size: 1rem;
`
const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1rem;
`

const ALink = styled.a`
  color: #677ce2;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-weight: bold;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #677ce2;
    transform-origin: bottom left;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
`

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`designtack`, `thevediwho`, `sillymovie`]}
    />
    <WordBlog>Projects</WordBlog>
    <h4>Logs about all the projects here and how it went in the blog. </h4>
    <Content>
      <ol>
        <li>
          <ALink href="http://sillymovie.surge.sh" target="_blank">
            Silly Movie Suggestor{" "}
          </ALink>
          <span role="img" aria-label="movie" aria-labelledby="movie">
            🎬
          </span>
        </li>
        <Para>
          This is a silly app which suggests you movies based on a random word
          or a word which you input. This was my first launch at{" "}
          <ALink
            href="https://www.producthunt.com/posts/silly-movie-suggestor"
            target="_blank"
          >
            Producthunt
          </ALink>
          .
        </Para>

        <li>
          <ALink href="https://www.designtack.com" target="_blank">
            Designtack{" "}
          </ALink>
          <span role="img" aria-label="design" aria-labelledby="design">
            🎨
          </span>
        </li>
        <Para>
          This online tool can{" "}
          <b>create you unique social media content and that too in bulk</b>.
          You just have to create one design and it automatically creates more
          designs based from it.
          <br />
          Launched on{" "}
          <ALink
            href="https://www.producthunt.com/posts/designtack"
            target="_blank"
          >
            ProductHunt{" "}
          </ALink>{" "}
          & you can read about my experience in{" "}
          <ALink href="/blog/project-designtack-and-lessons" target="_blank">
            this blog post
          </ALink>
          .
        </Para>

        <li>
          <ALink href="https://psych.email/" target="_blank">
            Psych{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            🧠
          </span>
        </li>
        <Para>
          Psych is a{" "}
          <b>
            bi-weekly newsletter where I share with you amusing psychological
            insights
          </b>{" "}
          which can prove to be beneficial in your personal as well as
          professional life.
          <br />
          This is more like a passion project and I discuss about it here,{" "}
          <ALink
            href="/blog/reddit-criticism-psych-community-progress"
            target="_blank"
          >
            in this post
          </ALink>
          .
        </Para>

        <li>
          <ALink href="http://learningintech.vercel.app//" target="_blank">
            LearningInTech
          </ALink>
          <span role="img" aria-label="code" aria-labelledby="code">
            👨‍💻
          </span>
        </li>
        <Para>
          This resource will help you <b>learn new technologies</b> by providing
          free and high quality tutorials. You can also{" "}
          <ALink href="https://discord.gg/A2jejy2">
            join the Discord Community
          </ALink>{" "}
          to meet and chill with other learners!
        </Para>

        <li>
          <ALink href="https://sheet-to-json.surge.sh" target="_blank">
            Sheet-to-JSON{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            📒
          </span>
        </li>
        <Para>
          Sheet-to-JSON is a{" "}
          <b>simple tool which converts .xls or .xlsx files to JSON format.</b>
          <br /> It's a progressive web app. I made this because I was solving
          an issue with LearningInTech. You can{" "}
          <ALink
            href="https://twitter.com/vaibhavThevedi/status/1334064637629718528"
            target="_blank"
          >
            see this tweet.
          </ALink>
        </Para>

        <li>
          <ALink href="https://gum.co/learningkit" target="_blank">
            LearningInTech Kit{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            ✨
          </span>
        </li>
        <Para>
          LearningInTech Kit is{" "}
          <b>a compiled list of resources about 12+ upcoming technologies! </b>
          <br />
          Informational Product, Loaded with 100+ Resources, Hand-picked &
          curated.
          <br />
          You can{" "}
          <ALink
            href="https://twitter.com/vaibhavThevedi/status/1350081002996068353"
            target="_blank"
          >
            see this thread for more information.
          </ALink>
        </Para>

        <li>
          <ALink href="https://thelessonclub.vercel.app/" target="_blank">
            TheLesson.Club{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            🦉
          </span>
        </li>
        <Para>
          {" "}
          Thelesson.club is an attempt to build a (small) community of curious
          people <br />
          who would like to <b>learn new things every month</b> & expand their
          knowledge in different subjects.
        </Para>

        <li>
          <ALink href="https://gum.co/psychology" target="_blank">
            The Psych Handbook{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            📗
          </span>
        </li>
        <Para>
          {" "}
          The Psych Handbook is a collection of <b>100+ psychological biases 
          and insights</b> which has been covered over the period of 1+ year of 
          writing the newsletter called Psych.
        </Para>

        <li>
          <ALink href="https://learnpsychology.co" target="_blank">
            Learn Psychology Co{" "}
          </ALink>
          <span role="img" aria-label="brain" aria-labelledby="brain">
            📚
          </span>
        </li>
        <Para>
          {" "}
          The purpose of this document is to provide you with a lot of resources 
          to get an <b>introduction to psychology</b>. You can find links to different 
          perspectives, ideas, people, areas in psychology.
        </Para>
      </ol>
    </Content>
  </Layout>
)

export default Projects
