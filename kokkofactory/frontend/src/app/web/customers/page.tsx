'use client';

import { useEffect, useState } from 'react';

// 取引先データの型を定義
interface Customer {
  id: number;
  name: string;
  address?: string;
  phone_number?: string;
  email?: string;
}

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Customer[] = await response.json();
        setCustomers(data);
      } catch (err) {
        setError('Failed to fetch customers.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>ロード中... </p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>エラーが発生しました: {error}</p>;
  }

  return (
    <div>
      <h1>取引先一覧 📝</h1>
      {customers.length === 0 ? (
        <p>取引先が見つかりませんでした。</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>取引先名</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>住所</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>電話番号</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>メールアドレス</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', verticalAlign: 'top' }}>{customer.name}</td>
                <td style={{ padding: '12px', verticalAlign: 'top' }}>{customer.address || '未登録'}</td>
                <td style={{ padding: '12px', verticalAlign: 'top' }}>{customer.phone_number || '未登録'}</td>
                <td style={{ padding: '12px', verticalAlign: 'top' }}>{customer.email || '未登録'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}