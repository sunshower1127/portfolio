import ClickableViewer from "./clickable-viewer";
import SeleniumCode from "./selenium-code";

const URL = "https://res.cloudinary.com/djf3l9yxq/image/upload/v1736772555/gpttuie";

function App() {
  return (
    <main className="flex flex-col [&>section]:pb-20">
      <h1 className="text-9xl font-thin  text-center font-serif">Portfolio 🚧</h1>
      <article className="bg-zinc-100 pb-20">
        <p>김선우</p>
        <p>Frontend Developer</p>
        <p>현재 숭실대학교 4학년 재학중(2020~)</p>
      </article>

      <section className="flex flex-col">
        <h2 className="text-4xl font-serif">Gpttuie</h2>
        <a
          href="https://github.com/sunshower1127/gpttuie-app-with-reactnative"
          target="_blank"
          rel=" noopener noreferrer"
        >
          https://github.com/sunshower1127/gpttuie-app-with-reactnative
        </a>
        <a
          href="https://github.com/sunshower1127/gpttuie-web-with-react"
          target="_blank"
          rel=" noopener noreferrer"
        >
          https://github.com/sunshower1127/gpttuie-web-with-react
        </a>

        <a href="https://gpttuie.web.app" target="_blank" rel=" noopener noreferrer">
          https://gpttuie.web.app
        </a>
        <p>AI 기반 레시피 생성 서비스</p>
        <p>기술 스택: React, React-Native, Styled-Component, Firebase(Auth, nosql DB, hosting)</p>
        <p>배운 점: 협업에 필요한 다양한 경험들…</p>
        <ClickableViewer images={Array.from({ length: 12 }).map((_, i) => `${URL}/${i + 1}.png`)} />
      </section>
      <section className="flex flex-col bg-zinc-100">
        <h2 className="text-4xl font-serif">Selenium Wrapper</h2>
        <a href="https://github.com/sunshower1127/selenium-wrapper-3" target="_blank" rel=" noopener noreferrer">
          https://github.com/sunshower1127/selenium-wrapper-3
        </a>
        <p>Python Selenium 편의성 라이브러리</p>
        <p>기술 스택: python, selenium, 정규식</p>
        <p>배운점 → lazy-import, 순환참조…</p>
        <SeleniumCode />
      </section>
      <section className="flex flex-col">
        <h2 className="text-4xl font-serif">Challenges in Programmers</h2>
        <a
          href="https://github.com/sunshower1127/challenges-in-programmers"
          target="_blank"
          rel=" noopener noreferrer"
        >
          https://github.com/sunshower1127/challenges-in-programmers
        </a>
        <p>프로그래머스 알고리즘 문제 정리</p>
        <p>기술 스택: python, 자료구조, 알고리즘</p>
        <p>배운점 → 다양한 알고리즘 문제 해결을 통해 문제 해결 능력 향상</p>
      </section>
      <section className="flex flex-col bg-zinc-100">
        <h2 className="text-4xl font-serif">Hi Projects</h2>
        <a href="https://github.com/sunshower1127/hi-projects" target="_blank" rel=" noopener noreferrer">
          https://github.com/sunshower1127/hi-projects
        </a>
        <p>프론트엔드의 다양한 라이브러리와 프레임워크 총정리</p>
        <p>기술 스택: </p>
        <p>배운점 → 다양한 라이브러리와 프레임워크 사용 방법</p>
      </section>
      <section className="flex flex-col">
        <h2 className="text-4xl font-serif">Netflix Clone</h2>
        <a href="https://github.com/sunshower1127/netflix-clone" target="_blank" rel=" noopener noreferrer">
          https://github.com/sunshower1127/netflix-clone
        </a>
        <p>React를 이용한 Netflix 클론 프로젝트</p>
        <p>기술 스택: React, </p>
        <p>배운점 → </p>
        <p>현재 진행중...</p>
      </section>
    </main>
  );
}

export default App;
