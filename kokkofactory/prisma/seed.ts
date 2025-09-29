import { PrismaClient } from '../generated/prisma/client';

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

// 1. 指定した範囲でランダムな整数を生成するヘルパー関数
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 2. 過去から未来にわたるランダムな日付を生成するヘルパー関数
// 2023年1月1日から2026年1月1日までのランダムな日付を生成します
const getRandomDate = () => {
  const start = new Date('2023-01-01T00:00:00Z').getTime();
  const end = new Date('2026-01-01T00:00:00Z').getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
};

async function main() {
  console.log('Start seeding (Realistic Data)...');

  // ------------------------------------
  // データをリセット
  // ------------------------------------
  await prisma.shipment.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.stock.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.deadChicken.deleteMany();
  await prisma.egg.deleteMany();
  await prisma.loginInfo.deleteMany();

  // ------------------------------------
  // ログイン情報 (変更なし)
  // ------------------------------------
  await prisma.loginInfo.createMany({
    data: [
      { login_type: '生産', password: 'production_password_hash' },
      { login_type: '経営', password: 'business_password_hash' },
      { login_type: '出荷準備', password: 'shipping_password_hash' },
      { login_type: '事務', password: 'office_password_hash' },
    ],
  });
  console.log('LoginInfo: 4 records created.');

  // ------------------------------------
  // 取引先情報 (Customer: 10件) の投入 - よりリアルな名称と住所のバリエーション
  // ------------------------------------
  const customerNames = ['スーパーS', 'レストランR', 'ホテルH', '給食センターK', 'ECサイトE'];
  const customerCities = ['東京都', '大阪府', '愛知県', '北海道', '福岡県'];
  const customerData = Array.from({ length: 10 }, (_, i) => ({
    name: `${customerNames[getRandomInt(0, 4)]}${i + 1}店`,
    address: `${customerCities[getRandomInt(0, 4)]} ${getRandomInt(1, 99)}丁目${getRandomInt(1, 99)}番地`,
    phone_number: `0${getRandomInt(3, 9)}-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`,
    email: `customer_real_${i + 1}@example.com`,
  }));
  await prisma.customer.createMany({ data: customerData });
  const customers = await prisma.customer.findMany(); 
  console.log('Customer: 10 records created.');

  // ------------------------------------
  // 仕入れ先情報 (Supplier: 10件) の投入 - よりリアルな名称と品目のバリエーション
  // ------------------------------------
  const supplierNames = ['養鶏場X', '飼料会社Y', '物流Z', '種鶏場A', '薬品会社B'];
  const itemNames = ['雛鳥(白色)', '雛鳥(赤色)', '配合飼料(前期)', '配合飼料(後期)', 'ワクチン'];
  const supplierData = Array.from({ length: 10 }, (_, i) => ({
    name: `${supplierNames[getRandomInt(0, 4)]}合同${i + 1}`,
    item_name: itemNames[getRandomInt(0, 4)],
    address: `神奈川県 ${getRandomInt(1, 99)}番地${getRandomInt(1, 99)}号`,
    phone_number: `0${getRandomInt(3, 9)}-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`,
    email: `supplier_real_${i + 1}@example.com`,
  }));
  await prisma.supplier.createMany({ data: supplierData });
  const suppliers = await prisma.supplier.findMany(); 
  console.log('Supplier: 10 records created.');

  // ------------------------------------
  // 卵の生産記録 (Egg: 10件) の投入 - 日付と生産数に不規則なランダム性
  // ------------------------------------
  const eggData = Array.from({ length: 10 }, () => {
    return {
      coop_number: getRandomInt(1, 4), // 鶏舎は1～4でランダム
      date: getRandomDate(), // 2023年～2026年でランダムな日付
      count: getRandomInt(800, 1800), // 生産数も幅広くランダム
    };
  });
  await prisma.egg.createMany({ data: eggData });
  console.log('Egg: 10 records created.');

  // ------------------------------------
  // 死んだ鶏の数の記録 (DeadChicken: 10件) の投入 - 日付と原因、数にランダム性
  // ------------------------------------
  const causeList = ['病気(高病原性)', '病気(軽度)', '事故(圧死)', '老衰', '不明', '獣害'];
  const deadChickenData = Array.from({ length: 10 }, () => {
    return {
      coop_number: getRandomInt(1, 2), // 鶏舎は1か2
      date: getRandomDate(), // 2023年～2026年でランダムな日付
      count: getRandomInt(1, 15), // 死亡数も幅広くランダム
      cause_of_death: causeList[getRandomInt(0, causeList.length - 1)],
    };
  });
  await prisma.deadChicken.createMany({ data: deadChickenData });
  console.log('DeadChicken: 10 records created.');

  // ------------------------------------
  // 仕入れ在庫 (Stock: 10件) の投入 - 在庫数と仕入れ先IDにランダム性
  // ------------------------------------
  const stockData = Array.from({ length: 10 }, () => ({
    supplierId: suppliers[getRandomInt(0, suppliers.length - 1)].id, // ランダムな仕入れ先
    count: getRandomInt(300, 2500), // 在庫数も大きく変動
  }));
  await prisma.stock.createMany({ data: stockData });
  console.log('Stock: 10 records created.');


  // ------------------------------------
  // 出荷情報 (Shipment: 10件) の投入 - 日付、顧客ID、出荷数に不規則なランダム性
  // ------------------------------------
  const shipmentData = Array.from({ length: 10 }, () => {
    return {
      customerId: customers[getRandomInt(0, customers.length - 1)].id, // ランダムな取引先
      shipment_date: getRandomDate(), // 2023年～2026年でランダムな日付
      shipped_count: getRandomInt(100, 1000), // 出荷数も幅広くランダム
    };
  });
  await prisma.shipment.createMany({ data: shipmentData });
  console.log('Shipment: 10 records created.');

  console.log('Seeding finished. All 6 tables have 10 records with high variability.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });