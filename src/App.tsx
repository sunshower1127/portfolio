import { preload } from "react-dom";

import ClickableViewer from "./components/clickable-viewer";
import GithubLink from "./components/github-link";
import Link from "./components/link";
import PortfolioHeader from "./components/portfolio-hearder";
import ProjectSection from "./components/project-section";
import SeleniumCode from "./components/selenium-code";
import { getImageURL } from "./utils";

const URL = "https://res.cloudinary.com/djf3l9yxq/image/upload/v1736772555/gpttuie";

function App() {
  for (let i = 1; i <= 12; i++) {
    preload(`${URL}/${i}.png`, { as: "image" });
  }
  return (
    <main className="flex flex-col">
      <PortfolioHeader />
      <article className="bg-sky-600 text-white flex flex-col items-center gap-3 pt-4 pb-5 mb-10">
        <p className="font-serif text-2xl -mb-1 thin">김선우</p>
        <p className="font-serif">
          Dreaming in <b>Frontend Developer</b>
        </p>

        <p className="font-serif text-sm font-light">숭실대학교 소프트웨어학부 4학년 재학중</p>
      </article>

      <ProjectSection>
        <h2>Gpttuie</h2>
        <h3>AI 기반 레시피 생성 서비스</h3>
        <div className="flex flex-col items-center gap-2">
          <Link url="https://gpttuie.web.app" />
          <GithubLink repoName="gpttuie-app-with-reactnative" />
          <GithubLink repoName="gpttuie-web-with-react" />
        </div>
        <div className="inline-flex flex-wrap gap-10 w-auto justify-center">
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/djf3l9yxq/image/upload/v1736835483/gpttuie/pc.png"
              className="relative w-[60rem] rounded-lg shadow scale-125 md:scale-100 h-full"
              style={{
                transformOrigin: "top center",
              }}
              alt=""
            />
          </div>
          <ClickableViewer images={Array.from({ length: 12 }).map((_, i) => `${URL}/${i + 1}.png`)} />
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
        <p>현재 프로그래머스 lvl.2 문제 정리완료 및 lvl.3 문제 푸는 중...</p>
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
        <h2>Cien Project</h2>
        <GithubLink repoName="cien-project" />
        <p>동아리 키오스크 화면 제작</p>
        <img className="p-10" src={getImageURL("cien-project")} />
        <div className="text-center">
          <b>기술 스택</b>
          <p>React, Tailwind, ReactQuery</p>
        </div>
        <div className="text-center">
          <b>배운점</b>
          <p>비동기 fetching 로직 처리, 에러 처리</p>
        </div>
      </ProjectSection>
      <ProjectSection>
        <h2>Netflix Clone</h2>
        <GithubLink repoName="netflix-clone" />
        <p>Netflix의 반응형 슬라이더를 직접 구현해보기</p>
        <img className="p-10" src={getImageURL("netflix-clone")} />
        <div className="text-center">
          <b>기술 스택</b>
          <p>React, Tailwind, 반응형 CSS</p>
        </div>
        <p>무한 스크롤, 반응형 컴포넌트</p>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Youtube Music Clone</h2>
        <GithubLink repoName="youtube-music-clonee" />
        <p>백엔드부터 프론트엔드까지 유튜브 뮤직 클론 만들기</p>
        <img className="w-[300px] rounded-2xl shadow-2xl" src={getImageURL("youtube-music")} />
        <div className="text-center">
          <b>기술 스택</b>
          <p>React, Tailwind, Zustand, PWA, ServiceWorker, Node, Python, S3</p>
        </div>
        <p>PWA로 만들어서 직접 사용중</p>
      </ProjectSection>
      <ProjectSection>
        <h2>LMS Auto Bot</h2>
        <GithubLink repoName="lms-auto-bot" />
        <p>싸이버 강의 듣기 자동화</p>
        <img className="w-4/5 max-w-[500px] rounded-xl shadow-2xl" src={getImageURL("lms-auto-bot")} />
        <div className="text-center">
          <b>기술 스택</b>
          <p>Go, Chromedp(웹자동화)</p>
        </div>
        <p>Go의 병렬 프로그래밍 공부. 웹 자동화 공부</p>
      </ProjectSection>
      <ProjectSection zink>
        <h2>Sunshower Tech Blog(진행중...🚧)</h2>
        <GithubLink repoName="sunshower-tech-blog" />
        <p>기술 블로그 직접 제작 후 포스팅 해보기</p>
        <div className="text-center">
          <b>기술 스택</b>
          <p>Next, Supabase, PostgreSQL, Tiptap(리치 텍스트에디터)</p>
        </div>
        <p>Next의 서버 컴포넌트, 서버 액션등 공부. Supabase Auth, DB관리</p>
      </ProjectSection>
    </main>
  );
}

export default App;
