import React from "react";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function About() {
  // const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    // 주소에서 가져온 값은 string이기 때문에 parseInt를 이용해 숫자형으로 변경한다
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 사용해보기</p>
      {/* {location.search} 쓰면 쿼리스트링을 전부 출력해줌
      <p>쿼리스트링: {location.search}</p> */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>toggle</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
}

export default About;
