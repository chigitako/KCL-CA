'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import LeftPullTab from "@components/LeftPullTab";


export default function NewCustomerPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create customer.');
      }

      setMessage('取引先が正常に登録されました！🎉');
      // 登録成功後、フォームをリセット
      setFormData({
        name: '',
        address: '',
        phone_number: '',
        email: '',
      });
      // 登録成功後、取引先一覧ページにリダイレクトすることもできます
      // router.push('/web/customers');
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    }
  };
  const handleGoBack = () => {
    router.push('/web/customers');
  };

  return (
    <LeftPullTab>
    <div className={styles.container}>
      <h1 className={styles.title}>新規取引先作成 📝</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="取引先名"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="address"
          placeholder="住所"
          value={formData.address}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="電話番号"
          value={formData.phone_number}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <div className={styles.buttonContainer}>
          <button type="button" onClick={handleGoBack} className={styles.backButton}>一覧に戻る</button>
          <button type="submit" className={styles.submitButton}>登録</button>
        </div>
      </form>

      {message && <p className={styles.message}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
    </LeftPullTab>
  );
}

