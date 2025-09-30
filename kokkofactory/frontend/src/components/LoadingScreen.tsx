import "./LoadingScreen.css";

export default function LoadingScreen({ message = "読み込み中…" }: { message?: string }) {
  return (
    <div className="loading-screen">
      <div className="loading-illustrations">
        <img src="/images/tori1.svg" alt="イラスト1" className="loading-img img1" />
        <img src="/images/tori2.svg" alt="イラスト2" className="loading-img img2" />
        <img src="/images/tori3.svg" alt="イラスト3" className="loading-img img3" />
      </div>
      <p>{message}</p>
    </div>
  );
}
