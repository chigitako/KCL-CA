import React from 'react';
import AppBar from '../components/AppBar';
import TopButtonGrid from '../components/TopButtonGrid';

const TopPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fdfdff', padding: '20px' }}>
      <AppBar title="こっこふぁくとりー" />
      {/* <h1>こっこふぁくとりー</h1> を削除 */}
      <TopButtonGrid />
    </div>
  );
};

export default TopPage;




