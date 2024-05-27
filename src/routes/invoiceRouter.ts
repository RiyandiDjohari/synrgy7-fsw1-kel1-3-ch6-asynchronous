import { Router } from "express";
import { InvoiceController } from "../controllers/invoiceController";

const router = Router();

const invoiceController = new InvoiceController();

router.get("/", invoiceController.invoiceList);
router.get("/:id", invoiceController.invoiceDetail);
router.post("/", invoiceController.createInvoice);
router.put("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

export default router;
