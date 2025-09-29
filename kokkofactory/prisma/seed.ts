import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  // データをリセット
  await prisma.shipment.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.stock.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.deadChicken.deleteMany();
  await prisma.egg.deleteMany();
  await prisma.loginInfo.deleteMany();

  // ログイン情報の投入
  await prisma.loginInfo.createMany({
    data: [
      { login_type: '生産', password: 'production_password_hash' },
      { login_type: '経営', password: 'business_password_hash' },
      { login_type: '出荷準備', password: 'shipping_password_hash' },
      { login_type: '事務', password: 'office_password_hash' },
    ],
  });

  // 卵の生産記録の投入
  await prisma.egg.createMany({
    data: [
      { coop_number: 1, date: new Date('2025-09-15T08:00:00Z'), count: 1200 },
      { coop_number: 2, date: new Date('2025-09-15T08:00:00Z'), count: 1500 },
      { coop_number: 1, date: new Date('2025-09-16T08:00:00Z'), count: 1250 },
    ],
  });

  // 死んだ鶏の数の記録の投入
  await prisma.deadChicken.createMany({
    data: [
      { coop_number: 1, date: new Date('2025-09-15T09:00:00Z'), count: 5, cause_of_death: '病気' },
      { coop_number: 2, date: new Date('2025-09-15T09:00:00Z'), count: 2, cause_of_death: '事故' },
    ],
  });

  // 取引先情報の投入
  const customer1 = await prisma.customer.create({
    data: {
      name: 'スーパーマーケットA',
      address: '東京都千代田区1-1-1',
      phone_number: '03-1234-5678',
      email: 'a@example.com',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'レストランB',
      address: '東京都中央区2-2-2',
      phone_number: '03-9876-5432',
      email: 'b@example.com',
    },
  });

  // 仕入れ先情報の投入
  const supplier1 = await prisma.supplier.create({
    data: {
      name: '養鶏場X',
      item_name: '鶏',
      address: '埼玉県さいたま市1-1-1',
      phone_number: '048-111-2222',
      email: 'x@example.com',
    },
  });

  const supplier2 = await prisma.supplier.create({
    data: {
      name: '飼料会社Y',
      item_name: '飼料',
      address: '神奈川県横浜市3-3-3',
      phone_number: '045-333-4444',
      email: 'y@example.com',
    },
  });

  // 仕入れ在庫の投入
  await prisma.stock.createMany({
    data: [
      {
        supplierId: supplier1.id,
        count: 1500,
      },
      {
        supplierId: supplier2.id,
        count: 800,
      },
    ],
  });

  // 出荷情報の投入
  await prisma.shipment.createMany({
    data: [
      {
        customerId: customer1.id,
        shipment_date: new Date('2025-09-16T10:00:00Z'),
        shipped_count: 500,
      },
      {
        customerId: customer2.id,
        shipment_date: new Date('2025-09-16T11:00:00Z'),
        shipped_count: 300,
      },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });