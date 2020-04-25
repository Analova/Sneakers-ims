"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddPriceToProductsAndItemsSchema extends Schema {
  up() {
    this.raw(`
   ALTER TABLE products
   ADD COLUMN price FLOAT AFTER sku
   `);
    this.raw(`
   ALTER TABLE items
   ADD COLUMN price FLOAT AFTER sku
   `);
  }

  down() {
    this.raw(`
   ALTER TABLE products
   DROM COLUMN price
   `);
    this.raw(`
   ALTER TABLE items
   DROM COLUMN price
   `);
  }
}

module.exports = AddPriceToProductsAndItemsSchema;
