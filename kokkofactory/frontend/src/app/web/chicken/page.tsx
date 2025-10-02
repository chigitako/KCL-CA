'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styles from './page.module.css'; // CSSファイルをインポート
import LoadingScreen from "@components/LoadingScreen"; //ローディング画面をインポート
import LeftPullTab from "@components/LeftPullTab";//プルタブインポート

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
  


  return (
    <LeftPullTab>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.inputContainer}>

            {/* 産卵入力 */}
            <div className={styles.FormContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 style={{textAlign: "center"}}>産卵入力</h2>
                {/* 鶏舎番号 */}
                <label className={styles.label}>
                  🐔 鶏舎番号
                  <select
                    value={coopNumber}
                    onChange={(e) => setCoopNumber(Number(e.target.value))}
                    className={styles.input}
                  >
                    {coopOptions.map((num) => (
                      <option key={num} value={num}>
                        {num}号鶏舎
                      </option>
                    ))}
                  </select>
                </label>
                {/* 卵の個数入力 */}
                <div className={styles.countInputContainer}>
                  <input
                    type="number"
                    className={styles.input}
                    value={countString}
                    onChange={(e) => setCountString(e.target.value)}
                  />
                  <span className={styles.unit}>個</span>
                </div>
                {/* 保存ボタン */}
                <button type="submit" disabled={isLoading} className={styles.button}>
                  {isLoading ? "保存中…" : "保存"}
                </button>
              </form>
            </div>

            {/* 死亡入力 */}
            <div className={styles.FormContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 style={{textAlign: "center"}}>死んだ鶏</h2>
                {/* 鶏舎番号 */}
                <label className={styles.label}>
                  🐔 鶏舎番号
                  <select
                    value={coopNumber}
                    onChange={(e) => setCoopNumber(Number(e.target.value))}
                    className={styles.input}
                  >
                    {coopOptions.map((num) => (
                      <option key={num} value={num}>
                        {num}号鶏舎
                      </option>
                    ))}
                  </select>
                </label>
                {/* 死んだにわとりの羽数入力 */}
                <div className={styles.countInputContainer}>
                  <input
                    type="number"
                    className={styles.input}
                    value={countString}
                    onChange={(e) => setCountString(e.target.value)}
                  />
                  <span className={styles.unit}>羽</span>
                </div>
                {/* 保存ボタン */}
                <button type="submit" disabled={isLoading} className={styles.button}>
                  {isLoading ? "保存中…" : "保存"}
                </button>
              </form>
            </div>
            
          </div>

          {/* 記録表 */}
          <div className={styles.memoryContainer}>
            <div className={styles.eggMemoryContainer}>
              <h3 style={{textAlign: "center"}}>採卵記録</h3>
              {eggListLoading ? (
                <p>読み込み中…</p>
              ) : eggList.length === 0 ? (
                <p>まだ採卵記録はありません。</p>
              ) : (
                <table className={styles.memoryTable}>
                  <thead>
                    <tr className={styles.tableHeader}>
                      <th>日時</th>
                      <th>鶏舎番号</th>
                      <th>個数</th>
                      <th>変更</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eggList.map((egg) => {
                      const date = new Date(egg.date);
                      const formattedDate = `${date.getFullYear()}/${(date.getMonth()+1)
                        .toString()
                        .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
                      return (
                        <tr key={egg.id}>
                          <td>{formattedDate}</td>
                          <td>{egg.coop_number}</td>
                          <td>{egg.count}</td>
                          <td>
                            {/* ここに編集ボタンとかアイコンを置ける */}
                            <button className={styles.editButton}>✏️</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>

            <div className={styles.deathMemoryContainer}>
              <h3 style={{textAlign: "center"}}>死亡記録</h3>
              {listLoading ? (
                <p>読み込み中…</p>
              ) : deadChickenList.length === 0 ? (
                <p>まだ死亡記録はありません。</p>
              ) : (
                <table className={styles.memoryTable}>
                  <thead>
                    <tr className={styles.tableHeader}>
                      <th>日時</th>
                      <th>鶏舎番号</th>
                      <th>羽数</th>
                      <th>変更</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deadChickenList.map((egg) => {
                      const date = new Date(egg.date);
                      const formattedDate = `${date.getFullYear()}/${(date.getMonth()+1)
                        .toString()
                        .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
                      return (
                        <tr key={egg.id}>
                          <td>{formattedDate}</td>
                          <td>{egg.coop_number}</td>
                          <td>{egg.count}</td>
                          <td>
                            {/* ここに編集ボタンとかアイコンを置ける */}
                            <button className={styles.editButton}>✏️</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
                      
          </div>
        </div>
        
        
      </div>
    </LeftPullTab>
  );
}