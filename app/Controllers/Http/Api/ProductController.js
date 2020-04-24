"use strict";
const Database = use("Database");
const sanitize = require("sqlstring");

class ProductController {
  async index({ view, request, response }) {
    try {
      let allProducts = await Database.raw(`
        SELECT products.id,
        products.title, products.sku,products.description,products.img_url, brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        products.material, products.qty, products.size, products.brand_id,
        products.user_id, products.created_at
        FROM products
        INNER JOIN brands
        ON products.brand_id = brands.id
        INNER JOIN users
        ON products.user_id = users.id
        ORDER BY created_at ASC
      `);
      allProducts = allProducts[0];

      return allProducts;
      //return view.render("admin/products/all", { allProducts });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
  async store({ request, response }) {
    try {
      const post = request.post();
      const order = await Database.raw(
        `
        INSERT INTO orders (f_name, l_name, address, address_2, city, state, country,  payment_type,  user_id)
        Values(${sanitize.escape(post.form.f_name)}, ${sanitize.escape(
          post.form.l_name
        )},
        ${sanitize.escape(post.form.address)},
        ${sanitize.escape(post.form.address_2)},
        ${sanitize.escape(post.form.city)},
        ${sanitize.escape(post.form.state)},
        ${sanitize.escape(post.form.country)},
        ${sanitize.escape(post.form.payment_type)},
        ${parseInt(1)});
      `
      ).then((order) => {
        const order_id = order[0].insertId;
        post.allItems.map((item) => {
          const insertItem = Database.raw(
            `
            INSERT INTO items (title, sku,  material, description, brand_id, qty, size, order_id, user_id)
            Values(${sanitize.escape(
              item.productInfo.title
            )}, ${sanitize.escape(item.productInfo.sku)},
            ${sanitize.escape(item.productInfo.material)},
            ${sanitize.escape(item.productInfo.description)},
            ${sanitize.escape(item.productInfo.brand_id)},
            ${sanitize.escape(item.qtyBuying)},
            ${sanitize.escape(item.productInfo.size)},
            ${sanitize.escape(order_id)},
            ${parseInt(1)});
            `
          )
            .then(() => {
              console.log("success");
              /* --------------------- */
              const updtateProduct = Database.raw(
                `
              Update products
              SET qty = qty - ${item.qtyBuying}
              WHERE id = ${item.productInfo.id}
            `
              )
                .then(() => {
                  console.log("successfully updated product");
                })
                .catch((error) => {
                  console.log(error);
                  return {
                    status: "error",
                    message: "Can't update product",
                    error: error.sqlMessage,
                  };
                });
              /* --------------------- */
            })
            .catch((error) => {
              console.log(error);
              return {
                status: "error",
                message: "Can't save item",
                error: error.sqlMessage,
              };
            });
        });
      });

      return {
        status: "success",
        message: "Saved Order",
      };
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message: "Can't save order",
        error: error.sqlMessage,
      };
    }
  }
}

module.exports = ProductController;
