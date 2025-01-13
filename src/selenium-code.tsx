import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SeleniumCode() {
  return (
    <div className="w-1/2 shadow-2xl">
      <SyntaxHighlighter
        language="python"
        style={oneDark}
        showLineNumbers={true}
        wrapLines={true}
        className="rounded-md text-xs"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

const code = `

from time import sleep

from selenium_wrapper_3.node import *
from selenium_wrapper_3.util import *


url("https://cyberuniv.com/login")

id, pw = "ID", "PW"

send_keys( Input(name="userid"), [id, "\\t", pw, "\\n"] )

click( Button(text="MyPage") / Parent )

with frame( IFrame(id="my-iframe") ):
    courses = Div(class_="course-header")

    courses_to_do = poll(
        lambda: [
            course
            for course in populate(courses)
            if text(course // A()) != "0"
        ]
    )


for course in courses_to_do:

    url("https://cyberuniv.com/mypage")

    with frame( IFrame(id="my-iframe") ):

        click( course // Button() )

        lectures = course // ( Div(2) / Div( ("text", "in", ["online", "supplement"]) ) )[2]

        sleep(2)

        titles = [
            text(lecture / A())
            for lecture in populate(lectures)
            if count( lecture / I( ("video-lecture", "in", "class") ) )
        ]

        print("Online Classes to do")
        print(*titles, sep="\\n")

`;
