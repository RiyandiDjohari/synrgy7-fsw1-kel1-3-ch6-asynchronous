import { Router } from "express";
// import articlesRouter from "./articlesRouter";
import invoiceRouter from "./invoiceRouter";

const router = Router();

// router.use('/articles', articlesRouter)
router.use("/invoices", invoiceRouter);

export default router;
