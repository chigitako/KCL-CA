// propsの型定義（classNameを受け取れるようにする）
type Props = {
  className?: string;
};

export default function LogoutButton({ className }: Props) {
  const handleLogout = async () => {
    try {
      const { signOut } = await import('firebase/auth');
      const { auth } = await import('@/firebase');
      await signOut(auth);
      // ログアウト成功後、ホームページにリダイレクト
      window.location.href = '/';
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className={className}
    >
      ログアウト
    </button>
  );
}
