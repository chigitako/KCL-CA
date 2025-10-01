'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import LeftPullTab from "@components/LeftPullTabMobile";

// 鶏舎の選択肢 (1から9)
const coopOptions = Array.from({ length: 9 }, (_, i) => i + 1);

// DeadChickenのデータ型 (APIレスポンスに基づく)
interface DeadChicken {
  id: number;
  coop_number: number;
  count: number;
  cause_of_death: string;
  date: string; // ISO 8601形式の文字列
}

// ✨ Eggのデータ型を追加
interface Egg {
  id: number;
  coop_number: number;
  count: number;
  date: string; // ISO 8601形式の文字列
}

// --- カスタムフック：死鶏一覧データ取得・管理 ---
const useDeadChickenList = () => {
  const [list, setList] = useState<DeadChicken[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);

  const fetchDeadChickenList = useCallback(async () => {
    setListLoading(true);
    setListError(null);
    try {
      const response = await fetch('/api/deathchicken', { method: 'GET' });

      if (!response.ok) {
        throw new Error('死鶏一覧データの取得に失敗しました。');
      }

      const data: DeadChicken[] = await response.json();
      setList(data);
    } catch (error) {
      console.error('死鶏一覧データ取得エラー:', error);
      // @ts-ignore
      setListError(error.message);
    } finally {
      setListLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDeadChickenList();
  }, [fetchDeadChickenList]);

  const refreshList = useCallback(() => {
    fetchDeadChickenList();
  }, [fetchDeadChickenList]);

  return { list, listLoading, listError, refreshList };
};

// --- ✨ カスタムフック：採卵一覧データ取得・管理を追加 ✨ ---
const useEggList = () => {
  const [list, setList] = useState<Egg[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);

  const fetchEggList = useCallback(async () => {
    setListLoading(true);
    setListError(null);
    try {
      // APIからデータをGETする (パスは /api/egg)
      const response = await fetch('/api/egg', { method: 'GET' });

      if (!response.ok) {
        throw new Error('採卵一覧データの取得に失敗しました。');
      }

      const data: Egg[] = await response.json();
      setList(data);
    } catch (error) {
      console.error('採卵一覧データ取得エラー:', error);
      // @ts-ignore
      setListError(error.message);
    } finally {
      setListLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEggList();
  }, [fetchEggList]);

  const refreshList = useCallback(() => {
    fetchEggList();
  }, [fetchEggList]);

  return { list, listLoading, listError, refreshList };
};


// --- SVG Icons (インラインで定義) ---
// (SVG定義は省略)

const Checkmark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
  
const XMark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
  
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

  // DeadChicken一覧のカスタムフックを使用
  const { list: deadChickenList, listLoading, listError, refreshList: refreshDeadChickenList } = useDeadChickenList();
  
  // ✨ Egg一覧のカスタムフックを使用
  const { list: eggList, listLoading: eggListLoading, listError: eggListError, refreshList: refreshEggList } = useEggList();


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

    // 1. 基本的なバリデーション (省略)
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

    // 2. APIパスとペイロードの決定 (省略)
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
          // ✨ Eggデータ登録成功時、一覧を更新
          refreshEggList(); 
        } else {
          successMessage = `✅ 鶏舎 ${coopNumber} の死んだ鶏 ${count} 羽（死因: ${causeOfDeath}）を記録しました！`;
          // 死鶏データ登録成功時、一覧を更新
          refreshDeadChickenList(); 
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
  }, [coopNumber, countString, causeOfDeath, dataType, refreshDeadChickenList, refreshEggList]); 

  // メッセージのクラスを動的に決定 (省略)
  const messageClasses = useMemo(() => {
    if (messageType === 'success') {
      return 'bg-green-100 text-green-700 border-green-500'; 
    } else if (messageType === 'error') {
      return 'bg-red-100 text-red-700 border-red-500';
    }
    return '';
  }, [messageType]);

  // テーマカラーを決定 (省略)
  const themeColor = dataType === 'egg' ? 'pink' : 'red';
  const headerText = dataType === 'egg' ? '採卵データ登録' : '死んだ鶏の記録';
  const headerIcon = dataType === 'egg' ? '🥚' : '💀';
  const labelText = dataType === 'egg' ? '採集された卵の個数' : '死んだ鶏の羽数';
  const buttonText = dataType === 'egg' ? '🐣 採卵データを記録する' : '💀 死んだ鶏を記録する';

  
  // ------------------------------------------------------------------
  // ✨ リスト表示コンポーネントを共通化 (表示内容だけ切り替える) ✨
  // ------------------------------------------------------------------
  const ListArea = () => {
    if (dataType === 'deathchicken') {
      // 死鶏リストの表示
      const list = deadChickenList;
      const loading = listLoading;
      const error = listError;
      const refresh = refreshDeadChickenList;
      
      return (
        <div className="w-full max-w-lg bg-white p-6 sm:p-10 shadow-xl rounded-2xl border-4 border-red-300">
          <h2 className="text-2xl font-extrabold text-gray-700 mb-6 flex items-center">
            📋 死んだ鶏の記録（最新10件）
            <button 
              onClick={refresh} 
              disabled={loading}
              className="ml-auto text-sm text-red-600 hover:text-red-800 disabled:opacity-50 transition"
            >
              {loading ? '読み込み中...' : '🔄 更新'}
            </button>
          </h2>

          {loading && (<div className="flex items-center justify-center p-8 text-red-500"><Loader /><span className="ml-2">データを読み込んでいます...</span></div>)}
          {error && (<div className="p-4 bg-red-100 text-red-700 rounded-lg border-l-4 border-red-500 font-medium">一覧データの取得中にエラーが発生しました: {error}</div>)}

          {!loading && !error && (
            <div className="space-y-4">
              {list.slice(0, 10).map((item) => (
                <div key={item.id} className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-red-800">
                      {item.coop_number}号鶏舎: <span className="text-xl font-extrabold">{item.count} 羽</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      **死因**: {item.cause_of_death}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">
                    {new Date(item.date).toLocaleDateString('ja-JP')}
                    <br />
                    {new Date(item.date).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}
              {list.length === 0 && (<p className="text-center text-gray-500 p-4">まだ記録された死んだ鶏のデータはありません。</p>)}
            </div>
          )}
        </div>
      );
    } else { // dataType === 'egg'
      // 採卵リストの表示
      const list = eggList;
      const loading = eggListLoading;
      const error = eggListError;
      const refresh = refreshEggList;

      return (
        <div className="w-full max-w-lg bg-white p-6 sm:p-10 shadow-xl rounded-2xl border-4 border-pink-300">
          <h2 className="text-2xl font-extrabold text-gray-700 mb-6 flex items-center">
            📋 採卵の記録（最新10件）
            <button 
              onClick={refresh} 
              disabled={loading}
              className="ml-auto text-sm text-pink-600 hover:text-pink-800 disabled:opacity-50 transition"
            >
              {loading ? '読み込み中...' : '🔄 更新'}
            </button>
          </h2>

          {loading && (<div className="flex items-center justify-center p-8 text-pink-500"><Loader /><span className="ml-2">データを読み込んでいます...</span></div>)}
          {error && (<div className="p-4 bg-red-100 text-red-700 rounded-lg border-l-4 border-red-500 font-medium">一覧データの取得中にエラーが発生しました: {error}</div>)}

          {!loading && !error && (
            <div className="space-y-4">
              {list.slice(0, 10).map((item) => (
                <div key={item.id} className="p-4 bg-pink-50 border border-pink-200 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-pink-800">
                      {item.coop_number}号鶏舎: <span className="text-xl font-extrabold">{item.count} 個</span>
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">
                    {new Date(item.date).toLocaleDateString('ja-JP')}
                    <br />
                    {new Date(item.date).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}
              {list.length === 0 && (<p className="text-center text-gray-500 p-4">まだ記録された採卵データはありません。</p>)}
            </div>
          )}
        </div>
      );
    }
  };


  return (
    <LeftPullTab>
      <div className={`min-h-screen bg-${themeColor}-50 p-4 sm:p-8 flex flex-col items-center font-inter transition-colors duration-500`}>
        {/* フォームエリア (変更なし) */}
        <div className={`w-full max-w-lg bg-white p-6 sm:p-10 shadow-xl rounded-2xl border-4 border-${themeColor}-300 transform transition duration-500 hover:scale-[1.01] mb-8`}>
          
          {/* ... (省略: ヘッダー、タブ切り替え、メッセージ、フォーム、ボタン) ... */}
          
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
                  required={dataType === 'deathchicken'}
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

        {/* ------------------------------------------------------------------ */}
        {/* ✨ 共通化したリスト表示エリアを使用 ✨ */}
        {/* ------------------------------------------------------------------ */}
        <ListArea />
      
      </div>
    </LeftPullTab>
  );
}