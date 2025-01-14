import { preload } from "react-dom";

import { motion } from "framer-motion";
import ClickableViewer from "./components/clickable-viewer";
import GithubLink from "./components/github-link";
import Link from "./components/link";
import ProjectSection from "./components/project-section";
import SeleniumCode from "./components/selenium-code";

const URL = "https://res.cloudinary.com/djf3l9yxq/image/upload/v1736772555/gpttuie";

function App() {
  for (let i = 1; i <= 12; i++) {
    preload(`${URL}/${i}.png`, { as: "image" });
  }
  return (
    <main className="flex flex-col">
      <motion.h1
        initial={{
          fontSize: "20vw",
          height: "100vh",
          marginBottom: "2.5rem",
        }}
        animate={{
          fontSize: "8rem",
          height: "10rem",
        }}
        transition={{
          duration: 3.0,
          ease: "circInOut",
        }}
        className="text-center"
      >
        Portfolio
      </motion.h1>
      <article className="bg-zinc-100 pb-20 flex flex-col items-center gap-2 pt-5">
        <p className="font-serif text-2xl">김선우</p>
        <p className="font-serif">Frontend Developer</p>
        <br />
        <p>숭실대학교 소프트웨어학부 4학년 재학중(2020 - )</p>
      </article>

      <ProjectSection>
        <h2>Gpttuie</h2>
        <h3>AI 기반 레시피 생성 서비스</h3>
        <div className="inline-flex flex-wrap gap-10 w-auto justify-center">
          <img
            src="https://res.cloudinary.com/djf3l9yxq/image/upload/v1736835483/gpttuie/pc.png"
            className="w-[60rem] rounded-lg shadow"
            alt=""
          />
          <ClickableViewer images={Array.from({ length: 12 }).map((_, i) => `${URL}/${i + 1}.png`)} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link url="https://gpttuie.web.app" />
          <GithubLink repoName="gpttuie-app-with-reactnative" />
          <GithubLink repoName="gpttuie-web-with-react" />
        </div>
        <p>대학교 3학년 1학기 팀 프로젝트</p>
        <div className="text-center">
          <b>기술 스택</b>
          <p>React, React-Native, Styled-Component, Firebase(Auth, noSQL DB, hosting)</p>
        </div>
        <div className="text-center">
          <b>배운 점</b>
          <p>협업의 어려움(CSS-Styling, Git, Typescript)</p>
        </div>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Selenium Wrapper</h2>
        <GithubLink repoName="selenium-wrapper-3" />
        <p>Python Selenium 편의성 라이브러리</p>
        <a
          href="https://pypi.org/project/Selenium-Wrapper-3/"
          target="_blank"
          rel="noreferrer"
          className="bg-zinc-700 text-white p-1 font-serif text-sm hover:cursor-grab hover:opacity-90"
        >
          pip install selenium-wrapper-3
        </a>
        <SeleniumCode />
        <div className="text-center">
          <b>기술 스택</b>
          <p>Python, 정규식</p>
        </div>
        <div className="text-center">
          <b>배운점</b>
          <p>Selenium 이해도 향상, 정규식 이해도 향상</p>
        </div>
      </ProjectSection>
      <ProjectSection>
        <h2>Challenges in Programmers</h2>
        <GithubLink repoName="challenges-in-programmers" />
        <p>프로그래머스 알고리즘 문제 정리</p>
        <p>현재 프로그래머스 lvl.2 문제 100개 가량 정리완료</p>
        <div className="text-center">
          <b>기술 스택</b>
          <p>Python, 자료구조, 알고리즘</p>
        </div>
        <div className="text-center">
          <b>배운점</b>
          <p>다양한 알고리즘, 문제해결 능력 향상</p>
        </div>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Hi Projects</h2>
        <p>프론트엔드의 다양한 라이브러리와 프레임워크 총정리</p>
        <GithubLink repoName="hi-projects" />
        <div className="text-center">
          <b>기술 스택</b>
          <p>
            React, Next, React-Router, Sass, Storybook, Tailwind, React-Query, TypeScript, Zustand, Framer-Motion
          </p>
        </div>
        <div className="text-center">
          <b>배운점</b>
          <p>프론트엔드의 다양한 라이브러리 및 프레임워크 공부</p>
        </div>
      </ProjectSection>
      <ProjectSection>
        <h2>Netflix Clone </h2>
        <GithubLink repoName="netflix-clone" />
        <p>React를 이용한 Netflix 클론 프로젝트</p>
        <div className="text-center">
          <b>기술 스택</b>
          <p>React, Next, React-Router, Sass, Storybook, Tailwind, React-Query, TypeScript, Zustand</p>
        </div>
        <p>직접 하나부터 열까지 구현해보고 실전성 획득</p>
        <p>현재 진행중... 🚧</p>
      </ProjectSection>
    </main>
  );
}

export default App;
