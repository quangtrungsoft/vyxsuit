import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { withErrorHandler } from "@/utils/withErrorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { keyword } = req.query;

    const condition = keyword ? { Name: { contains: keyword } } : {};
    
    const products = await prisma.product.findMany({
      where: {
        AND: [
          { ProductType: "DesignOfSuit" }, // Điều kiện cố định
          {...condition}
        ],
      },
    });

    res.status(200).json(products);
  } else if (req.method === "POST") {
  
    res.status(201).json({});
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withErrorHandler(handler);
