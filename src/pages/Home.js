import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보이는 페이지</p>
      <ul>
        <li>
          {/* Link 컴포넌트는 a태그와 비슷함 */}
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/soso">소소의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">길동의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않음</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
