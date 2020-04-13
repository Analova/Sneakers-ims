"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateProductsSchema extends Schema {
  up() {
    this.raw(
      `CREATE TABLE products(
       id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(100) NOT NULL,
       sku VARCHAR(60) NOT NULL,
       material VARCHAR(60) NOT NULL ,
       description TEXT NOT NULL ,
       brand_id INT UNSIGNED ,
       qty INT UNSIGNED NOT NULL,
       size  FLOAT UNSIGNED NOT NULL ,
       user_id INT UNSIGNED NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
       
      )`
    );
  }

  down() {
    this.raw(`DROP TABLE products`);
  }
}

module.exports = CreateProductsSchema;
