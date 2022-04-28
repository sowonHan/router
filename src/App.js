import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      {/* 레이아웃 파일 안의 메인태그에 아웃렛을 해놔서 자식태그인 home, about, profile 페이지가 중첩되어 이동할 때마다 보이고 header 태그는 고정된 것 같은 효과를 준다 */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        {/* 주석해둔 밑의 것과 내용은 같은데 조금 더 직관적인 형태 */}
        <Route path=":id" element={<Article />} />
      </Route>
      {/* <Route path="/articles/:id" element={<Article />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      {/* '*'은 위에서 지정한 경로를 제외한 나머지를 의미 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
