/*import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import TopButtonGrid from '../components/TopButtonGrid';
import Dashbord from '../components/Dashbord';
import Carender from '../components/Carender';

const TopPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date); // カレンダーで選択された日付を更新
  };

  return (
    <div 
    style={{ 
      backgroundColor: '#FFFFF0', // 背景色（画像がない場合に表示される）
      padding: '20px', 
      minHeight: '100vh',
      backgroundImage: 'url(/images/haikei1.png)', // 画像の URL を指定
      backgroundSize: '923px 473px', // 背景画像サイズ
      backgroundPosition: '0 0', // 画像を左上に配置
      backgroundRepeat: 'repeat', // 画像を繰り返し表示
    }}
    >
      <AppBar title={{ src: '/images/rogosample.png', alt:'こっこファクトリーのロゴ'}} />
      {/* <h1>こっこふぁくとりー</h1> を削除 *//*}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', //左寄せ
          marginLeft: '100px',
          gap: '50px',
        }}
      >
      <TopButtonGrid />
         <Carender onDateChange={handleDateChange} /> {/* 日付が変わるたびにhandleDateChangeが呼ばれる *//*}
         <Dashbord selectedDate={selectedDate} /> {/* 選択された日付をDashbordに渡す *//*}
      </div>
    </div>
  );
};

export default TopPage;
*/



