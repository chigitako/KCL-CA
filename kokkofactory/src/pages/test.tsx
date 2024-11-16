import React from "react";
import BackButton from "../components/BackButton"; //パスに合わせて変更
import AppBar from "../components/AppBar";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>テストページ</h1>
      <BackButton />
      <AppBar title="test"/>
      <TextBox />
    </div>
  );
};

export default TestPage;
