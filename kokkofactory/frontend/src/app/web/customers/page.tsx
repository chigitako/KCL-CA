import React, { useState, useCallback, useMemo } from 'react';
import { Egg, CheckCircle, XCircle, Loader2 } from 'lucide-react';

// 鶏舎の選択肢 (1から9)
const coopOptions = Array.from({ length: 9 }, (_, i) => i + 1);

// --- Component ---
export default function App() {
  
  // 鶏舎番号 (1-9のプルダウン選択)
  const [coopNumber, setCoopNumber] = useState(1);
  // 採集された卵の個数
  const [count, setCount] = useState(0);
  // API呼び出し中の状態
  const [isLoading, setIsLoading] = useState(false);
  // ユーザーへのフィードバックメッセージ
  const [message, setMessage] = useState(null);
  // メッセージのタイプ (success or error)
  const [messageType, setMessageType] = useState('');

  /**
   * フォーム送信時の処理。/api/eggにデータをPOSTします。
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setMessage(null);
    setMessageType('');
    
    // クライアントサイドでの基本的なバリデーション
    if (coopNumber < 1 || coopNumber > 9) {
      setMessage('エラー: 鶏舎番号を1から9の中から選択してください。');
      setMessageType('error');
      return;
    }
    
    // 0以下の入力やNaNをチェック
    if (count <= 0 || isNaN(count)) {
      setMessage('エラー: 個数は0より大きい数値を入力してください。');
      setMessageType('error');
      return;
    }
    
    setIsLoading(true);

    try {
      const response = await fetch('/api/egg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coop_number: coopNumber,
          count: count,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // APIから返されたデータを使ってメッセージを生成
        setMessage(`✅ 鶏舎 ${data.data.coop_number} の卵 ${data.data.count} 個を記録しました！`);
        setMessageType('success');
        // 成功したら個数入力をリセット (鶏舎番号はそのままにして連続入力を楽にする)
        setCount(0);
      } else {
        // API側で発生したバリデーションエラーなど
        setMessage(`❌ 登録に失敗しました: ${data.message || '不明なエラー'}`);
        setMessageType('error');
      }
    } catch (error) {
      console.error('API通信エラー:', error);
      setMessage('💔 ネットワークエラーが発生しました。接続を確認してください。');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  }, [coopNumber, count]); // 依存配列にstateを含める

  // メッセージのクラスを動的に決定 (useMemoで最適化)
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
          <Egg className="w-10 h-10 text-pink-500 mr-3" />
          <h1 className="text-3xl font-extrabold text-pink-600">
            採卵データ登録 🥚💕
          </h1>
        </div>

        <p className="text-center text-gray-500 mb-8">
          鶏舎番号と、今日採集された卵の個数を入力してください。
        </p>

        {/* メッセージ表示エリア */}
        {message && (
          <div className={`p-4 mb-6 rounded-xl border-l-4 font-medium transition duration-300 ${messageClasses}`}>
            <div className="flex items-center">
              {messageType === 'success' ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-pink-600">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* 卵の個数入力 (数値) */}
          <div className="mb-8">
            <label htmlFor="eggCount" className="block text-sm font-semibold text-gray-700 mb-2">
              🔢 採集された卵の個数
            </label>
            <input
              type="number"
              id="eggCount"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value, 10))}
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
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                登録中...
              </>
            ) : (
              '🐣 データを記録する'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
