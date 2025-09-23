'use client';

import { useState } from 'react';

// 取引先データの型を定義
interface Customer {
  id: number;
  name: string;
  address?: string | null;
  phone_number?: string | null;
  email?: string | null;
}

export default function NewShipmentPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    phone_number: '',
    email: '',
    address: '',
    shipped_count: '',
    shipment_date: new Date().toISOString().split('T')[0],
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<Customer[]>([]);
  const [isCustomerNew, setIsCustomerNew] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // 取引先名が変更されたらサジェストを検索
    if (name === 'customerName') {
      searchCustomers(value);
    }
  };

  const handleSuggestionClick = (customer: Customer) => {
    setFormData((prevData) => ({
      ...prevData,
      customerName: customer.name,
      phone_number: customer.phone_number || '',
      email: customer.email || '',
      address: customer.address || '',
    }));
    setSuggestions([]);
    setIsCustomerNew(false);
  };

  const searchCustomers = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setIsCustomerNew(true);
      return;
    }
    try {
      // 既存のAPIエンドポイントを使って検索
      const response = await fetch('/api/customers');
      if (!response.ok) {
        throw new Error('Failed to fetch customer suggestions.');
      }
      const allCustomers: Customer[] = await response.json();
      const filteredCustomers = allCustomers.filter(customer => 
        customer.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredCustomers);
      // 検索結果がなければ新規として扱う
      const isMatchFound = filteredCustomers.some(customer => customer.name === query);
      setIsCustomerNew(!isMatchFound);
    } catch (err) {
      console.error(err);
      setSuggestions([]);
      setIsCustomerNew(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const payload = {
        ...formData,
        shipped_count: parseInt(formData.shipped_count),
      };

      const response = await fetch('/api/shipments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create shipment.');
      }

      setMessage('出荷情報が正常に登録されました！🎉');
      // フォームをリセット
      setFormData({
        customerName: '',
        phone_number: '',
        email: '',
        address: '',
        shipped_count: '',
        shipment_date: new Date().toISOString().split('T')[0],
      });
      setIsCustomerNew(true);
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>出荷情報 新規作成 📝</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <h2>取引先情報</h2>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            name="customerName"
            placeholder="取引先名"
            value={formData.customerName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          {suggestions.length > 0 && (
            <ul style={suggestionListStyle}>
              {suggestions.map(customer => (
                <li key={customer.id} onClick={() => handleSuggestionClick(customer)} style={suggestionItemStyle}>
                  {customer.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type="tel"
          name="phone_number"
          placeholder="電話番号"
          value={formData.phone_number}
          onChange={handleChange}
          readOnly={!isCustomerNew}
          style={isCustomerNew ? inputStyle : disabledInputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleChange}
          readOnly={!isCustomerNew}
          style={isCustomerNew ? inputStyle : disabledInputStyle}
        />
        <input
          type="text"
          name="address"
          placeholder="住所"
          value={formData.address}
          onChange={handleChange}
          readOnly={!isCustomerNew}
          style={isCustomerNew ? inputStyle : disabledInputStyle}
        />

        <hr style={{ margin: '20px 0' }} />

        <h2>出荷情報</h2>
        <input
          type="number"
          name="shipped_count"
          placeholder="出荷個数"
          value={formData.shipped_count}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="shipment_date"
          value={formData.shipment_date}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>登録</button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '20px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const disabledInputStyle = {
  ...inputStyle,
  backgroundColor: '#f0f0f0',
  color: '#888',
  cursor: 'not-allowed',
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#ff69b4',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const suggestionListStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderTop: 'none',
  maxHeight: '200px',
  overflowY: 'auto',
  zIndex: 10,
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const suggestionItemStyle: React.CSSProperties = {
  padding: '10px',
  cursor: 'pointer',
};