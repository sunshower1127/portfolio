import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SeleniumCode() {
  return (
    <div>
      <div className="flex text-center font-serif mb-3 text-lg justify-center flex-wrap">
        <div>구글 검색창에 들어가 텍스트를 입력하고, </div>
        <div>2번째 포스트를 클릭하는 시나리오</div>
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        <div>
          <p className="text-center text-xl font-serif">Before</p>
          <SyntaxHighlighter
            className="w-[90vw] lg:w-[45vw] max-w-[36rem] h-[43rem] shadow-2xl rounded-md text-xs"
            language="python"
            style={oneDark}
            showLineNumbers={true}
            wrapLines={true}
          >
            {beforeCode}
          </SyntaxHighlighter>
        </div>
        <div>
          <p className="text-center text-xl font-serif">After</p>
          <SyntaxHighlighter
            language="python"
            style={oneDark}
            showLineNumbers={true}
            wrapLines={true}
            className="w-[90vw] lg:w-[45vw] max-w-[36rem] h-[19rem] lg:h-[43rem] shadow-2xl rounded-md text-xs"
          >
            {afterCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

const beforeCode = `"use selenium only"

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()

# Google 접속
driver.get("https://www.google.com")

# 검색창 요소 찾기 (명시적 대기 사용)
search_box = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.NAME, "q"))
)

# 검색어 입력
search_box.send_keys("검색 텍스트")

# Enter 키 입력으로 검색 실행
search_box.send_keys(Keys.RETURN)

# 결과 페이지 로딩 대기
WebDriverWait(driver, 10)
  .until(EC.presence_of_element_located((By.ID, "search")))

# 두 번째 검색 결과 찾기 및 클릭
search_results = WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.g"))
)
second_result = search_results[1]
link = second_result.find_element(By.CSS_SELECTOR, "a")
link.click()
`;

const afterCode = `"use selenium_wrapper"

from selenium_wrapper_3.node import *
from selenium_wrapper_3.util import *

url("https://www.google.com")

# 검색창에 검색어 입력
send_keys(Textarea(name="q"), ["검색 텍스트", "\\n"])

# 두 번째 검색 결과 클릭
click(H3(2) / Parent)
# 자동으로 로딩을 기다리는 로직이 내장되어 있음.
# 못찾을 경우 디버깅을 위해 콘솔에 xpath 출력 -> "(//h3)[2]/.."
`;
