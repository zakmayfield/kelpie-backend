import { PrismaClient } from '@prisma/client';
import { ServerContext } from '../types.js';

export async function createContext(
  db: PrismaClient,
  req: Record<string, any>,
  res: Record<string, any>
): Promise<ServerContext> {
  return {
    db,
    req,
    res,
  };
}