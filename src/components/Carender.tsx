import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CarenderProps = {
    onDateChange: (date: Date | null) => void; // 親から渡された関数
};

const Carender: React.FC<CarenderProps> = ({ onDateChange }) => {
    const [date, setDate] = useState<Value>(new Date());

    const handleDateChange = (value: Value, event: React.MouseEvent<HTMLButtonElement>) => {
        setDate(value); //選択された日付を状態に保存
        if (value instanceof Date) {
            onDateChange(value); // 親コンポーネントに選択された日付を通知
        } else {
            onDateChange(null); // 範囲が選択されていない場合、nullを渡す
        }
    };

    return(
        <div
            style={{
                textAlign: 'center', //テキストを中央ぞろえ
            }}
        >
            <h2>カレンダー</h2>
            <div
                style={{
                    width: '100%',
                    maxWidth: '600px', //カレンダーの幅を指定
                    height: '400px',
                    margin: '0 auto',
                    backgroundColor: '#8B4513',
                    padding: '20px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}
            >
                {/* カレンダーを表示 */}
                <Calendar
                    onChange={handleDateChange} //日付が指定された時の処理
                    value={date} //現在選択されている日付
                    locale="en-US" //曜日を英語に設定
                    className = "custom-calendar"
                />
            </div>
        </div>
    );
};

export default Carender;