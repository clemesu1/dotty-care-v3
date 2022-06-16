import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const callTransactionData = JSON.parse(req.body);

  const savedCallTransaction = await prisma.callTransaction.create({
    data: callTransactionData
  });

  res.json(savedCallTransaction);
};
