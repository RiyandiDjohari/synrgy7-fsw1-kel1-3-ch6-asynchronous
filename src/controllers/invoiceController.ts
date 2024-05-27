import { Response, Request } from "express";
import { InvoiceModel } from "../database/model/invoice.model";

export class InvoiceController {
  invoiceList = async (req: Request, res: Response) => {
    try {
      const invoices = await InvoiceModel.query();
      res.status(200).json(invoices);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  invoiceDetail = async (req: Request, res: Response) => {
    try {
      const invoice = await InvoiceModel.query().findById(req.params.id);
      if (invoice) {
        res.status(200).json(invoice);
      } else {
        res.status(404).json({ message: "Invoice not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createInvoice = async (req: Request, res: Response) => {
    try {
      const invoice = await InvoiceModel.query().insert(req.body);
      res.status(201).json(invoice);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateInvoice = async (req: Request, res: Response) => {
    try {
      const invoice = await InvoiceModel.query().findById(req.params.id);
      if (invoice) {
        const updatedInvoice = await invoice.$query().patchAndFetch(req.body);
        res.status(200).json(updatedInvoice);
      } else {
        res.status(404).json({ message: "Invoice not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteInvoice = async (req: Request, res: Response) => {
    try {
      const invoice = await InvoiceModel.query().findById(req.params.id);
      if (invoice) {
        await invoice.$query().delete();
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invoice not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default new InvoiceController();
