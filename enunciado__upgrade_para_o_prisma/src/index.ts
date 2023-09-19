import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function find(){
  const users = await prisma.posts.findMany();
  return users;
}

(async () => {
  const result = await find()

  const posts = result;
  console.log("Posts encontrados no banco:", posts);
})();
