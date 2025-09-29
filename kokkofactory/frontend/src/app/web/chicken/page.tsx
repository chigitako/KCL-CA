'use client';

import React, { useState, useCallback, useMemo } from 'react';

// 鶏舎の選択肢 (1から9)
const coopOptions = Array.from({ length: 9 }, (_, i) => i + 1);

// --- SVG Icons (インラインで定義) ---
// チェックマークSVG (成功メッセージ用)
const Checkmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// バツマークSVG (エラーメッセージ用)
const XMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// ローダー（くるくる回転するSVG - 読み込み中ボタン用）
const Loader = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 animate-spin">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
);

type DataType = 'egg' | 'deathchicken';

// --- Component ---
export default function ChickenFarmDataPage() {
  
  const [dataType, setDataType] = useState<DataType>('egg'); // 採卵 or 死鶏
  const [coopNumber, setCoopNumber] = useState(1);
  const [countString, setCountString] = useState('0'); 
  const [causeOfDeath, setCauseOfDeath] = useState(''); // 死鶏の場合のみ使用
  const [isLoading, setIsLoading] = useState(false);
  
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // フォームが切り替わったときにメッセージと死因をリセット
  const handleTypeChange = useCallback((newType: DataType) => {
    setDataType(newType);
    setMessage(null);
    setMessageType('');
    setCauseOfDeath('');
    setCountString('0');
  }, []);

  /**
   * フォーム送信時の処理。選択されたデータタイプに応じてAPIを切り替えます。
   */
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setMessageType('');
    
    const count = parseInt(countString || '0', 10);

    // 1. 基本的なバリデーション
    if (coopNumber < 1 || coopNumber > 9) {
      setMessage('エラー: 鶏舎番号を1から9の中から選択してください。');
      setMessageType('error');
      return;
    }
    
    if (isNaN(count) || count < 0) {
      setMessage(`エラー: ${dataType === 'egg' ? '個数' : '羽数'}は0以上の数値を入力してください。`);
      setMessageType('error');
      return;
    }
    
    // 採卵の場合、個数は1以上を要求
    if (dataType === 'egg' && count <= 0) {
      setMessage('エラー: 採卵個数は1以上の数値を入力してください。');
      setMessageType('error');
      return;
    }

    // 死鶏の場合、死因をチェック
    if (dataType === 'deathchicken' && !causeOfDeath.trim()) {
      setMessage('エラー: 死因は必須入力です。');
      setMessageType('error');
      return;
    }
    
    setIsLoading(true);

    // 2. APIパスとペイロードの決定
    const apiPath = `/api/${dataType}`;
    const payload: { [key: string]: any } = {
      coop_number: coopNumber,
      count: count,
    };
    
    if (dataType === 'deathchicken') {
      payload.cause_of_death = causeOfDeath.trim();
    }

    try {
      const response = await fetch(apiPath, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`サーバーから不正な応答がありました。APIパス (${apiPath}) を確認してください。`);
      }
      
      const data = await response.json();

      if (response.ok) {
        let successMessage = '';
        if (dataType === 'egg') {
          successMessage = `✅ 鶏舎 ${coopNumber} の卵 ${count} 個を記録しました！`;
        } else {
          successMessage = `✅ 鶏舎 ${coopNumber} の死んだ鶏 ${count} 羽（死因: ${causeOfDeath}）を記録しました！`;
        }
        setMessage(successMessage);
        setMessageType('success');
        setCountString('0'); // 成功したら個数入力をリセット
        setCauseOfDeath('');
      } else {
        setMessage(`❌ 登録に失敗しました: ${data.message || '不明なエラー'}`);
        setMessageType('error');
      }
    } catch (error) {
      console.error('API通信エラー:', error);
      // @ts-ignore
      setMessage(`💔 API通信エラーが発生しました: ${error.message}`);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  }, [coopNumber, countString, causeOfDeath, dataType]); 

  // メッセージのクラスを動的に決定
  const messageClasses = useMemo(() => {
    if (messageType === 'success') {
      // 卵はピンク、死鶏は赤（成功は緑）
      return 'bg-green-100 text-green-700 border-green-500'; 
    } else if (messageType === 'error') {
      return 'bg-red-100 text-red-700 border-red-500';
    }
    return '';
  }, [messageType]);

  // テーマカラーを決定
  const themeColor = dataType === 'egg' ? 'pink' : 'red';
  const headerText = dataType === 'egg' ? '採卵データ登録' : '死んだ鶏の記録';
  const headerIcon = dataType === 'egg' ? '🥚' : '💀';
  const labelText = dataType === 'egg' ? '採集された卵の個数' : '死んだ鶏の羽数';
  const buttonText = dataType === 'egg' ? '🐣 採卵データを記録する' : '💀 死んだ鶏を記録する';

  return (
    <div className={`min-h-screen bg-${themeColor}-50 p-4 sm:p-8 flex items-center justify-center font-inter transition-colors duration-500`}>
      <div className={`w-full max-w-lg bg-white p-6 sm:p-10 shadow-xl rounded-2xl border-4 border-${themeColor}-300 transform transition duration-500 hover:scale-[1.01]`}>
        
        {/* ヘッダーとタブ切り替え */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{headerIcon}</span>
            <h1 className="text-3xl font-extrabold text-gray-700">
              {headerText}
            </h1>
          </div>

          <div className="flex p-1 bg-gray-100 rounded-xl shadow-inner">
            <button
              onClick={() => handleTypeChange('egg')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                dataType === 'egg' 
                  ? 'bg-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              🥚 採卵データ
            </button>
            <button
              onClick={() => handleTypeChange('deathchicken')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                dataType === 'deathchicken' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              💀 死んだ鶏
            </button>
          </div>
        </div>
        
        {/* メッセージ表示エリア */}
        {message && (
          <div className={`p-4 mb-6 rounded-xl border-l-4 font-medium transition duration-300 ${messageClasses}`}>
            <div className="flex items-center">
              {messageType === 'success' ? <Checkmark /> : <XMark />}
              <span>{message}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          {/* 鶏舎番号入力 (プルダウン) */}
          <div className="mb-6">
            <label htmlFor="coopNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              🐔 鶏舎番号 (1-9)
            </label>
            <div className="relative">
              <select
                id="coopNumber"
                value={coopNumber}
                onChange={(e) => setCoopNumber(parseInt(e.target.value, 10))}
                className={`w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-${themeColor}-500 focus:border-${themeColor}-500 appearance-none bg-white transition duration-200 shadow-sm hover:border-gray-400`}
                required
                disabled={isLoading}
              >
                {coopOptions.map((num) => (
                  <option key={num} value={num}>
                    {num}号鶏舎
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 個数/羽数入力 (数値) */}
          <div className="mb-6">
            <label htmlFor="count" className="block text-sm font-semibold text-gray-700 mb-2">
              🔢 {labelText}
            </label>
            <input
              type="number"
              id="count"
              value={countString} 
              onChange={(e) => setCountString(e.target.value)} 
              min={dataType === 'egg' ? "1" : "0"}
              step="1"
              className={`w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-${themeColor}-500 focus:border-${themeColor}-500 transition duration-200 shadow-sm`}
              placeholder={dataType === 'egg' ? "例: 150" : "例: 5"}
              required
              disabled={isLoading}
            />
          </div>
          
          {/* 死因入力 (死鶏モードの場合のみ表示) */}
          {dataType === 'deathchicken' && (
            <div className="mb-8">
              <label htmlFor="causeOfDeath" className="block text-sm font-semibold text-gray-700 mb-2">
                📝 死因
              </label>
              <input
                type="text"
                id="causeOfDeath"
                value={causeOfDeath}
                onChange={(e) => setCauseOfDeath(e.target.value)}
                className={`w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-${themeColor}-500 focus:border-${themeColor}-500 transition duration-200 shadow-sm`}
                placeholder="例: 換気不良、病気など"
                required={dataType === 'dead-chicken'}
                disabled={isLoading}
              />
            </div>
          )}

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center p-3 text-lg font-bold rounded-lg text-white transition duration-300 shadow-lg 
              ${isLoading
                ? `bg-${themeColor}-400 cursor-not-allowed` 
                : `bg-${themeColor}-600 hover:bg-${themeColor}-700 active:bg-${themeColor}-800 transform hover:-translate-y-0.5`}`
            }
          >
            {isLoading ? (
              <>
                <Loader />
                登録中...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
