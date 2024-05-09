// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작

// component 는 return 을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>hello component</div>; // JSX(JavaScript xml) code
}

function MyComp() {
  // JSX 코드 : <div></div>
  const myElem = <h1>JSX code</h1>;

  return myElem;
}

function App() {
  /*
  component 사용 시 종료 태그 생략할 수 없음
  br 같은 빈 요소는 시작태그에서 꼭 종료
  */
  return (
    <>
      <div>
        {/* JSX 내에서의 주석 */}
        <h1>hello react</h1>
        <h2>hi</h2>
        <p>Lorem ipsum dolor.</p>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
