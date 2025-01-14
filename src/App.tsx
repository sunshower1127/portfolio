import { preload } from "react-dom";
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
      <h1 className="text-center mb-10">Portfolio 🚧</h1>
      <article className="bg-zinc-100 pb-20 flex flex-col items-center gap-2">
        <p className="font-serif">김선우</p>
        <p className="font-serif">Frontend Developer</p>
        <p>현재 숭실대학교 4학년 재학중(2020~)</p>
      </article>

      <ProjectSection>
        <h2>Gpttuie</h2>
        <GithubLink repoName="gpttuie-app-with-reactnative" />
        <ClickableViewer images={Array.from({ length: 12 }).map((_, i) => `${URL}/${i + 1}.png`)} />
        <GithubLink repoName="gpttuie-web-with-react" />
        <Link url="https://gpttuie.web.app" />
        <p>AI 기반 레시피 생성 서비스</p>
        <p>기술 스택: React, React-Native, Styled-Component, Firebase(Auth, nosql DB, hosting)</p>
        <p>배운 점: 협업에 필요한 다양한 경험들…</p>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Selenium Wrapper</h2>
        <GithubLink repoName="selenium-wrapper-3" />
        <p>Python Selenium 편의성 라이브러리</p>
        <p>기술 스택: python, selenium, 정규식</p>
        <p>배운점 → lazy-import, 순환참조…</p>
        <SeleniumCode />
      </ProjectSection>
      <ProjectSection>
        <h2>Challenges in Programmers</h2>
        <GithubLink repoName="challenges-in-programmers" />
        <p>프로그래머스 알고리즘 문제 정리</p>
        <p>기술 스택: python, 자료구조, 알고리즘</p>
        <p>배운점 → 다양한 알고리즘 문제 해결을 통해 문제 해결 능력 향상</p>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Hi Projects</h2>
        <GithubLink repoName="hi-projects" />
        <p>프론트엔드의 다양한 라이브러리와 프레임워크 총정리</p>
        <p>기술 스택: </p>
        <p>배운점 → 다양한 라이브러리와 프레임워크 사용 방법</p>
      </ProjectSection>
      <ProjectSection>
        <h2>Netflix Clone 🚧</h2>
        <GithubLink repoName="netflix-clone" />
        <p>React를 이용한 Netflix 클론 프로젝트</p>
        <p>기술 스택: React, </p>
        <p>배운점 → </p>
        <p>현재 진행중...</p>
      </ProjectSection>
    </main>
  );
}

export default App;
