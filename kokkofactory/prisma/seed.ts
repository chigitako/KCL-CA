// prisma/seed.ts
import { PrismaClient } from '../generated/prisma'; // output設定に合わせてこのパスにしています

const prisma = new PrismaClient();

async function main() {
  console.log('--- シード処理を開始します --- 🌱');

  try {
    // 1. 既存のデータをクリーンアップ (開発用なので毎回リセットする想定)
    // 依存関係のあるテーブルから順に削除 (外部キー制約のため)
    // 子テーブルから削除 -> 親テーブルを削除 の順になります
    await prisma.egg_counts.deleteMany({});
    await prisma.sensor_weather_logs.deleteMany({});
    await prisma.chicken_coops.deleteMany({}); // 親テーブルも削除

    console.log('既存のデータを全てクリアしました。🧹');

    // --- 2. Chicken_coops データ (依存元のため最初に作成) ---
    // coop_id = 1 と coop_id = 2 の鶏舎を作成します
    const coop1 = await prisma.chicken_coops.create({
      data: {
        device_number: 101, // デバイス番号
      },
    });
    const coop2 = await prisma.chicken_coops.create({
      data: {
        device_number: 102,
      },
    });
    console.log(`鶏舎データを作成しました: ${coop1.coop_id}, ${coop2.coop_id}`);

    // --- 3. Egg_counts データ (Chicken_coopsに依存) ---
    await prisma.egg_counts.createMany({
      data: [
        {
          coop_id: coop1.coop_id, // 作成したcoop_idを使用
          count: 10,
          average_weight: 55.2,
          // recorded_at は @default(now()) で自動設定される
        },
        {
          coop_id: coop1.coop_id,
          count: 12,
          average_weight: 58.1,
        },
        {
          coop_id: coop2.coop_id,
          count: 8,
          average_weight: 50.0,
        },
      ],
    });
    console.log('卵の数データを追加しました。🥚');

    // --- 4. Sensor_weather_logs データ (Chicken_coopsに依存) ---
    await prisma.sensor_weather_logs.createMany({
      data: [
        {
          coop_id: coop1.coop_id, // 作成したcoop_idを使用
          temperature: 25.5,
          humidity: 60.3,
          water_temperature: 28.1,
          ammonia_concentration: 5.2,
          // recorded_at は @default(now()) で自動設定される
        },
        {
          coop_id: coop1.coop_id,
          temperature: 26.1,
          humidity: 62.0,
          water_temperature: 29.5,
          ammonia_concentration: 5.5,
        },
        {
          coop_id: coop2.coop_id,
          temperature: 24.0,
          humidity: 58.5,
          water_temperature: 27.0,
          ammonia_concentration: 4.8,
        },
      ],
    });
    console.log('センサーログデータを追加しました。🌡️');

    console.log('--- シード処理が完了しました！✨ ---');

  } catch (error) {
    // エラーが発生した場合にコンソールに出力
    console.error('シード中にエラーが発生しました:', error);
    // プロセスをエラー終了させる
    process.exit(1);
  } finally {
    // 処理の最後にデータベース接続を閉じる
    await prisma.$disconnect();
  }
}

// main 関数を実行
main();