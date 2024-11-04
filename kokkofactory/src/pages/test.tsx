import React from 'react';
import BackButton from '../components/BackButton'; //パスに合わせて変更
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>テストページ</h1>
      <BackButton />
      <AppBar />
      <Button />
    </div>
  );
};

export default TestPage;
