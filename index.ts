import express, { Express, Request, Response } from "express";
import knex from "knex";
import { Model } from "objection";
// import { Articles, ArticlesModel } from "./model/article.model";
import router from "./src/routes";
import knexInstance from "./src/database/index";
import { config } from "dotenv";

config();

const app: Express = express();
const PORT = process.env.PORT || 3000;


Model.knex(knexInstance);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
