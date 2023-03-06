import { PrismaClient } from '@prisma/client';
import { ServerContext } from '../types.js';

export async function createContext(
  db: PrismaClient,
  req: any,
  res: any
): Promise<ServerContext> {

  const headers = req.headers
  console.log('::: headers in context :::', headers)

  return {
    db,
    req,
    res,
  };
}