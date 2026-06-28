import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("expense-tracker");
    const expensesCollection = db.collection("expenses");
    // Create expenses
    app.post("/expenses", async (req, res) => {
      const result = await expensesCollection.insertOne(req.body);
      res.send(result);
    });
    // Get expenses
    app.get("/expenses", async (req, res) => {
      const db = client.db("expense-tracker");
      const { category } = req.query;

      let query = {};
      if (category && category !== "All") {
        query = { category };
      }

      const expenses = await db.collection("expenses").find(query).toArray();
      res.send(expenses);
    });
    // Update expense
    app.put("/expenses/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const { _id, ...updatedData } = req.body;

        const result = await expensesCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedData },
        );

        res.send(result);
      } catch (error) {
        console.error("Update Error:", error);
        res.status(500).send({ message: "Failed to update expense", error });
      }
    });
    // Delete expenses
    app.delete("/expenses/:id", async (req, res) => {
      const id = req.params.id;
      const result = await expensesCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    // expense stats for recharts implementations
    app.get("/expenses-stats", async (req, res) => {
      const db = client.db("expense-tracker");
      const stats = await db
        .collection("expenses")
        .aggregate([
          {
            $group: {
              _id: "$category",
              value: { $sum: { $toDouble: "$amount" } },
            },
          },
        ])
        .toArray();
      res.send(stats);
    });
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running fine!");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

export default app;
