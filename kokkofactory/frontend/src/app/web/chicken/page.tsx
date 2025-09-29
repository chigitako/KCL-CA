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

// --- Component ---
export default function EggInputFormPage() {
  
  const [coopNumber, setCoopNumber] = useState(1);
  // 文字列として管理することで、NaNエラーを回避
  const [countString, setCountString] = useState('0'); 
  const [isLoading, setIsLoading] = useState(false);
  
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  /**
   * フォーム送信時の処理。/api/chickenにデータをPOSTします。
   */
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setMessageType('');
    
    // 文字列を数値に変換。空文字列の場合は0として扱う
    const count = parseInt(countString || '0', 10);

    // クライアントサイドでの基本的なバリデーション
    if (coopNumber < 1 || coopNumber > 9) {
      setMessage('エラー: 鶏舎番号を1から9の中から選択してください。');
      setMessageType('error');
      return;
    }
    
    // NaNまたは0以下のチェック
    if (isNaN(count) || count <= 0) {
      setMessage('エラー: 個数は0より大きい数値を入力してください。');
      setMessageType('error');
      return;
    }
    
    setIsLoading(true);

    try {
      // 🐔 APIパスを /api/chicken に統一
      const apiPath = '/api/chicken'; 
      
      const response = await fetch(apiPath, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coop_number: coopNumber,
          count: count, 
        }),
      });

      // APIからのレスポンスをJSONとして解析
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // 404の場合、JSONではないHTMLが返ってくるため、ここで捕捉する
        throw new Error(`サーバーから不正な応答がありました。APIパス (${apiPath}) を確認してください。`);
      }
      
      const data = await response.json();

      if (response.ok) {
        // 成功時の処理
        setMessage(`鶏舎 ${coopNumber} の卵 ${count} 個を記録しました！`);
        setMessageType('success');
        // 成功したら個数入力をリセット
        setCountString('0');
      } else {
        // API側で発生したエラー（4xx, 5xxなど）の処理
        setMessage(`登録に失敗しました: ${data.message || '不明なエラー'}`);
        setMessageType('error');
      }
    } catch (error) {
      // ネットワークエラー、JSON解析エラーなどのキャッチ
      console.error('API通信エラー:', error);
      // @ts-ignore
      setMessage(`API通信エラーが発生しました: ${error.message}`);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  }, [coopNumber, countString]); 

  // メッセージのクラスを動的に決定
  const messageClasses = useMemo(() => {
    if (messageType === 'success') {
      return 'bg-pink-100 text-pink-700 border-pink-500';
    } else if (messageType === 'error') {
      return 'bg-red-100 text-red-700 border-red-500';
    }
    return '';
  }, [messageType]);

  return (
    <div className="min-h-screen bg-pink-50 p-4 sm:p-8 flex items-center justify-center font-inter">
      <div className="w-full max-w-lg bg-white p-6 sm:p-10 shadow-xl rounded-2xl border-4 border-pink-300 transform transition duration-500 hover:scale-[1.01]">
        
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-extrabold text-pink-600">
            採卵データ登録
          </h1>
        </div>

        <p className="text-center text-gray-500 mb-8">
          鶏舎番号と、今日採集された卵の個数を入力してください。
        </p>

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
              鶏舎番号 (1-9)
            </label>
            <div className="relative">
              <select
                id="coopNumber"
                value={coopNumber}
                onChange={(e) => setCoopNumber(parseInt(e.target.value, 10))}
                className="w-full p-3 border-2 border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 appearance-none bg-white transition duration-200 shadow-sm hover:border-pink-400"
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

          {/* 卵の個数入力 (数値) */}
          <div className="mb-8">
            <label htmlFor="eggCount" className="block text-sm font-semibold text-gray-700 mb-2">
              採集された卵の個数
            </label>
            <input
              type="number"
              id="eggCount"
              // countStateを文字列として使う
              value={countString} 
              // 入力を直接文字列としてStateに保存
              onChange={(e) => setCountString(e.target.value)} 
              min="0"
              step="1"
              className="w-full p-3 border-2 border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-200 shadow-sm"
              placeholder="例: 150"
              required
              disabled={isLoading}
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center p-3 text-lg font-bold rounded-lg text-white transition duration-300 shadow-lg 
              ${isLoading
                ? 'bg-pink-400 cursor-not-allowed' 
                : 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 transform hover:-translate-y-0.5'}`
            }
          >
            {isLoading ? (
              <>
                <Loader />
                登録中...
              </>
            ) : (
              'データを記録する'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
