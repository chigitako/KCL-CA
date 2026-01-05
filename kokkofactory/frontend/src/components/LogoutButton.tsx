// propsの型定義（classNameを受け取れるようにする）
type Props = {
  className?: string;
};

export default function LogoutButton({ className }: Props) {
  return (
    // formタグにも幅100%を指定して、レイアウト崩れを防ぎます
    <form 
      action="/auth/signout" method="post" style={{ width: "100%" }}>
      <button 
        type="submit" 
        className={className} // ← ここで受け取ったスタイルを適用！
      >
        ログアウト
      </button>
    </form>
  );
}
