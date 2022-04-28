import React from "react";
import { useParams } from "react-router-dom";

const data = {
  soso: {
    name: "소소",
    description: "url 파라미터 공부 중",
  },
  gildong: {
    name: "홍길동",
    description: "아버지를 아버지라 부르지 못하고",
  },
};

function Profile(props) {
  // useParams로 App.js의 /:username을 가져온다
  const params = useParams();
  // params 데이터 중 username이라는 데이터가 profile에 담긴다
  // data[] 쓰면 객체에 있는 데이터를 가져올 수 있다. 못 가져오면 undefined로 처리되어 삼항연산자에서 false로 분류됨 (void가 예시)
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

export default Profile;
