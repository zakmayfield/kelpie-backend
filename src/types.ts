import { PrismaClient } from '@prisma/client';

export interface ServerContext {
  db: PrismaClient;
  req: any;
  res: any;
}

export interface LoginArgs {
  email: string;
  password: string;
}