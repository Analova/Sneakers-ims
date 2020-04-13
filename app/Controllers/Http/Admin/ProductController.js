"use strict";
const Database = use("Database");
const sanitize = require("sqlstring");

class ProductController {
  index({ view }) {
    return view.render("admin/products/all");
  }

  async store({ request, resposne }) {
    try {
      const post = request.post();
      await Database.raw(
        `INSERT INTO products (title, sku, material,description,
       brand_id, qty,size,user_id)
       Values(${sanitize.escape(post.title)}, 
       ${sanitize.escape(post.sku)},
       ${sanitize.escape(post.material)},
       ${sanitize.escape(post.description)} ,
       ${parseInt(3)},
       ${sanitize.escape(post.qty)},
       ${sanitize.escape(post.size)}, 
       ${parseInt(1)})
    `
      );
      return `<h1 style="color:green">Saved success<h1>`;
    } catch (error) {
      console.log(error);
      return `<h1 style="color:red">There was an error<h1>
      <h3>${error.sqlMessage}</h3>`;
    }
  }

  create({ view }) {
    return view.render("admin/products/create");
  }

  show({ view }) {
    return view.render("admin/products/show");
  }
  edit({ view }) {
    return view.render("admin/products/edit");
  }

  update() {}
  delete() {}
}

module.exports = ProductController;
