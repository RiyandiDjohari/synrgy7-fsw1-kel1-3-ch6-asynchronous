import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;

  static get tableName() {
    return "users";
  }
}

export type User = ModelObject<UserModel>;
