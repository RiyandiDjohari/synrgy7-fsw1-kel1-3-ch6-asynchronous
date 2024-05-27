import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("invoice", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.integer("amount").notNullable();
    table.decimal("total_invoice").notNullable();
    table
      .integer("type_invoice_id")
      .unsigned()
      .references("id")
      .inTable("type_invoice")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    // table.foreign("id_type_invoice").references("id").inTable("type_invoice");
    table.integer("user_id").unsigned().references("id").inTable("user");
    table.string("status", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("invoice");
}
