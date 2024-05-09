// 최상위 컴포넌트는 1개만 작성
function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 fragment 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Consequuntur, dolorem, perspiciatis!</p>
    </>
  );
}
function MyComp() {
  // 여러줄 사용 시 div 로 감싸서 사용
  return (
    <div>
      <p>1</p>
      <p>2</p>
    </div>
  );
}

function MyTag() {
  // JSX 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello Tag
      <p>Lorem ipsum.</p>
      <p>Expedita, necessitatibus!</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
