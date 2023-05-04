import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User1',
    },
  });
  console.log('User created:', user1);

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User2',
    },
  });
  console.log('User created:', user2);
}

main();
