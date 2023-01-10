import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const inputs: Prisma.TagCreateInput[] = [
  { name: "慶應班" },
  { name: "東北班" },
  { name: "機構班" },
  { name: "電装班" },
  { name: "BIO班" },
  { name: "制御班" },
];

const TagSeeder = async () => {
  await prisma.tag.deleteMany();
  const tags = [];
  for (const input of inputs) {
    const tag = prisma.tag.create({
      data: input,
    });
    tags.push(tag);
  }
  return await prisma.$transaction(tags);
};

export default TagSeeder;
