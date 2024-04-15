import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const result = await axios
      .get(process.env.ARTICLE_GAS_URL ?? "", {
        params: {
          token: process.env.ARTICLE_GAS_TOKEN,
        },
      })
      .then((response) => {
        return response.data;
      });
    return res.status(200).json(result);
  }
};

export default handler;
