import { PrismaClient } from "@prisma/client";
import TagSeeder from "./tagSeeder.js";
const prisma = new PrismaClient();

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
