"use strict";
const Database = use("Database");
const sanitize = require("sqlstring");

class OrderController {
  async index({ view, request, response }) {
    try {
      let allOrders = await Database.raw(`
      SELECT  orders.id,  concat(orders.f_name,"", orders.l_name) as customer, 
      SUM(items.qty) as total_itmes, 
      SUM(items.price * items.qty) as total_price,
      concat(orders.state, " ", orders.country) as location, orders.payment_type,
      concat(users.f_name, " ", users.l_name) as user
      FROM orders
      INNER JOIN items
      ON orders.id = items.order_id
      INNER JOIN users
      ON orders.user_id = users.id
      GROUP BY orders.id
      `);
      //console.log(allOrders);
      allOrders = allOrders[0];

      return view.render("admin/orders/all", { allOrders });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async store({ request, response, params }) {
    try {
      const post = request.post();
      await Database.raw(
        `INSERT INTO orders (title, sku, img_url, material,description,
       brand_id, qty,size,user_id)
       Values(${sanitize.escape(post.title)}, 
       ${sanitize.escape(post.sku)},
        ${sanitize.escape(post.img_url)},
       ${sanitize.escape(post.material)},
       ${sanitize.escape(post.description)} ,
        ${sanitize.escape(post.brand_id)} ,
       ${sanitize.escape(post.qty)},
       ${sanitize.escape(post.size)}, 
       ${parseInt(1)})
    `
      );
      return response.redirect("/admin/orders");
    } catch (error) {
      console.log(error);
      return response.redirect("back");
      //  `<h1 style="color:red">There was an error<h1>
      // <h3>${error.sqlMessage}</h3>`;
    }
  }

  async create({ view, request, response }) {
    // let brands = await Database.raw(
    //   `SELECT * FROM brands
    //     ORDER BY brands.title ASC
    // `
    // );
    let oders = " ";
    return view.render("admin/orders/create", { oders });
  }

  async show({ view, request, response, params }) {
    //return params;
    try {
      //   let order = await Database.raw(
      //     `
      //     SELECT orders.id,
      //      orders.title, orders.sku,orders.img_url,
      //      orders.description,brands.title as brand,
      //      concat( users.f_name, " " ,users.l_name) as user, orders.material, orders.qty, orders.size,
      //     orders.user_id, orders.created_at
      //     FROM orders
      //     INNER JOIN brands
      //     ON orders.brand_id= brands.id
      //     INNER JOIN users
      //     ON orders.user_id= users.id
      //     WHERE orders.id= ${params.id}
      //     ORDER BY created_at ASC
      //     LIMIT 1
      // `
      //   );
      //   order = order[0][0];
      let order = "";

      return view.render("admin/orders/show", { order });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
  async edit({ view, request, response, params }) {
    try {
      let order = await Database.raw(
        `
        SELECT orders.id, 
         orders.title, orders.sku,orders.img_url,
         orders.description,brands.title as brand,
         concat( users.f_name, " " ,users.l_name) as user, orders.material, orders.qty, orders.size,  
        orders.user_id, orders.brand_id,
        orders.created_at  
        FROM orders
        INNER JOIN brands
        ON orders.brand_id= brands.id
        INNER JOIN users
        ON orders.user_id= users.id 
        WHERE orders.id= ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
    `
      );
      order = order[0][0];

      let brands = await Database.raw(
        `
        SELECT * FROM brands  
        ORDER BY brands.title ASC
    `
      );
      brands = brands[0];

      return view.render("admin/orders/edit", { order, brands });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async update({ request, response, params }) {
    try {
      const id = params.id;
      const post = request.post();
      await Database.raw(`
        UPDATE orders
        SET
        title=${sanitize.escape(post.title)},
        sku= ${sanitize.escape(post.sku)},
        img_url=${sanitize.escape(post.img_url)},
        material=${sanitize.escape(post.material)},
        description=${sanitize.escape(post.description)} ,
        brand_id= ${sanitize.escape(post.brand_id)},
        qty= ${sanitize.escape(post.qty)},
        size=${sanitize.escape(post.size)},
        user_id=${parseInt(1)}
        WHERE id=${id}

      `);

      return response.redirect(`/admin/orders/${id}`);
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async delete({ request, response, params }) {
    try {
      const id = params.id;
      const post = request.post();
      await Database.raw(`
       DELETE FROM orders
        WHERE id=${id}

      `);

      return response.redirect("/admin/orders");
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
}

module.exports = OrderController;
