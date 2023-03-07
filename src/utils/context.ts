import { PrismaClient } from '@prisma/client';
import { ServerContext } from '../types.js';

export async function createContext(
  db: PrismaClient,
  req: any,
  res: any
): Promise<ServerContext> {

  const headers = req.headers

  // run an auth check here possibly & return auth user or other context
  // console.log('headers ::: backend', headers)

  return {
    db,
    req,
    res,
  };
}