import { PrismaClient } from "@prisma/client";

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

export const initPrisma = (url: string) => {
  const prisma =
    global.prisma ||
    new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    });

  global.prisma = prisma;

  return prisma;
};
