import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Articles() {
  return (
    <div>
      {/* Outlet 컴포넌트가 페이지를 중첩해서 볼 수 있게 해준다 */}
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
}

function ArticleItem({ id }) {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      {/* NavLink는 현재 활성화된 링크의 스타일을 바꿀 수 있다
      isActive는 true/false로 값이 나온다 */}
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
}

export default Articles;
