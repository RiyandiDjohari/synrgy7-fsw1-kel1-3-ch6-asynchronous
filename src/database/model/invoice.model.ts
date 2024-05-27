import { Model, ModelObject } from "objection";
import { TypeInvoiceModel } from "./type_invoice.model";
import { UserModel } from "./user.model";

export class InvoiceModel extends Model {
  id!: number;
  amount!: number;
  type_invoice_id!: number;
  user_id!: number;
  status!: string;

  static get tableName() {
    return "invoice";
  }

  static get relationMappings() {
    return {
      type_invoices: {
        relation: Model.HasManyRelation,
        modelClass: TypeInvoiceModel,
        join: {
          from: "invoice.type_invoice_id",
          to: "type_invoice.id",
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "invoice.user_id",
          to: "user.id",
        },
      },
    };
  }
}

export type Articles = ModelObject<InvoiceModel>;
