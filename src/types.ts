import { PrismaClient } from '@prisma/client';

export interface ServerContext {
  db: PrismaClient;
  req: Record<string, any>;
  res: Record<string, any>;
}
