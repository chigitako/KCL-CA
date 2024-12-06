import React from "react";

type DashbordProps = {
    selectedDate: Date | null; // 親から渡された日付
};

const Dashbord: React.FC<DashbordProps> = ({ selectedDate }) => {
    return(
        <div
            style={{
                textAlign: 'center', //テキストを中央ぞろえ
                alignItems: 'flex-start',
                width: 'calc(100% - 100px)',
            }}
        >
            <h2>
                ダッシュボード
            </h2>
            <div
                style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: '400px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    margin: '0 auto',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}
            >
                <p>
                    {selectedDate
                        ? `選択された日付: ${selectedDate.toLocaleDateString()}`
                        : '日付が選択されていません'}
                </p>
                <p>ダッシュボードコンテンツは個々に表示されます</p>
            </div>
        </div>
    );
};

export default Dashbord;    