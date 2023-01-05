import { PrismaClient, Prisma } from "@prisma/client";
import TagSeeder from "./tagSeeder.js";
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const tagInputs: Prisma.TagCreateInput[] = [
  { name: "慶應班" },
  { name: "東北班" },
  { name: "機構班" },
  { name: "電装班" },
  { name: "BIO班" },
  { name: "制御班" },
];

const seed = async () => {
  TagSeeder();
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);

  await seed();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
