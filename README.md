# 🐣 こっこふぁくとりー（KokkoFactory）

養鶏場向けの管理アプリケーション。鶏舎ごとの卵の収穫状況を効率的に記録・確認できるWebアプリです。技能実習生や高齢者の作業者でも直感的に使えるデザインを目指しました。

## 📌 概要

- 鶏舎ごとの卵の数を記録・表示できる
- イラストベースのインターフェースで、直感的な操作が可能
- 使用者のITリテラシーを問わない簡単UI

## 💡 背景と目的

養鶏場の農場長をしている知人の要望に応えることを目的に開発に取り組みました。養鶏場では複数の鶏舎を日々管理する必要がありますが、紙での記録や口頭での報告に頼る現場も少なくありません。特に外国人技能実習生や高齢者の作業者にとって、情報共有の負担が課題となっていました。  
そこで、**誰でも簡単に使える養鶏場専用アプリ**として本サービスを開発しました。

## 👥 チーム構成

- メンバー：5人（全員アプリ開発未経験）
- 役割分担：
  - リーダー／技術担当：UIモック作成・Git運用整備・ページ実装
  - デザイン担当：配色設計、ロゴ・イラスト作成
  - その他：要件整理、ユーザー調査、発表資料作成 など

## 🔧 使用技術

- フロントエンド：Next.js, TypeScript, React
- バックエンド：Next.js API Routes（簡易的なデータ保存）
- デザインツール：Figma
- その他：GitHub（チーム開発管理）

## 🎨 UI・デザインのこだわり

- 農場への訪問・ヒアリングを重ね、実際の使用環境に即したUIを設計
- 技能実習生向けに**言語依存の少ないイラスト中心のUI**
- 芸術学部のメンバーによる**見やすく親しみやすい配色**

## 🚀 機能一覧

- 鶏舎ボタンから各鶏舎ページに遷移
- 卵の個数をボタン1つで記録

## 📚 学びと反省

- 初期に機能を絞り込みすぎてしまったが、他チームの充実ぶりを見て「まず挑戦してから考える」姿勢の大切さを実感
- GitやReactの基礎を短期間で身につけたことで、開発へのハードルが下がった

## 🔮 今後追加したい機能（2025/6/16より機能追加を開発開始予定）
- ハードウェアを導入し、各鶏舎の気温・湿度を管理する。異常が起きたら通知し鶏舎に行かなくても以上を感知できる状態を目指す。
- 日・月・年毎ごとの集卵数をグラフで見られるようにし、異常感知や予測ができるようにする。
- 出荷先の情報を登録し、販売個数などを管理できるようにする。
