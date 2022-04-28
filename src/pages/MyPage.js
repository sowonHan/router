import React from "react";
import { Navigate } from "react-router-dom";

function MyPage() {
  const isLoggedIn = false;
  // !isLoggedIn는 '참이 아니면'을 의미. 그래서 현재 false니까 로그인페이지로 이동
  if (!isLoggedIn) {
    // Navigate는 자바스크립트에서 location.href와 비슷하다
    // replace 옵션은 메모 파일에 공식설명 붙여놨으니 참고하기
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이페이지</div>;
}

export default MyPage;
