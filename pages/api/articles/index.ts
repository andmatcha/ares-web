import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const result = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // リクエストヘッダーの内容を確認する用
        console.log(response);
        return response.data;
      });
    return res.status(200).json(result);
  }
};
