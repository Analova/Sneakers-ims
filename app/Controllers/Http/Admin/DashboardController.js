"use strict";
const Database = use("Database");
const sanitize = require("sqlstring");

class DashboardController {
  async index({ view, request, response }) {
    try {
      let data = {
        topSalesMonthly: {
          months: [],
          total_items: [],
          total_earned: [],
        },
      };
      let getMonthSales = await Database.raw(`
          SELECT
		    monthname(any_value(orders.created_at)) as month,
        SUM(items.qty) as total_items,
        SUM(items.price * items.qty) as total_price
        FROM orders
        INNER JOIN items
        ON orders.id = items.order_id
        WHERE YEAR(orders.created_at) = YEAR(CURDATE())
        GROUP BY MONTH(orders.created_at)
        `);
      getMonthSales = getMonthSales[0];
      getMonthSales.map((item) => {
        data.topSalesMonthly.months.push(item.month);
        data.topSalesMonthly.total_items.push(item.total_items);
        data.topSalesMonthly.total_earned.push(item.total_price);
      });

      //return data;

      //let getMonthSales = "";

      return view.render("admin/dashboard/index", { data });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async store({ request, response, params }) {
    try {
      const post = request.post();
      await Database.raw(
        `INSERT INTO dashboard (title,  img_url , description,user_id)
       Values(${sanitize.escape(post.title)}, 
        ${sanitize.escape(post.img_url)},
       ${sanitize.escape(post.description)} ,
       ${parseInt(1)})
    `
      );
      return response.redirect("/admin/dashboard");
    } catch (error) {
      console.log(error);
      return response.redirect("back");
      //  `<h1 style="color:red">There was an error<h1>
      // <h3>${error.sqlMessage}</h3>`;
    }
  }

  create({ view, request, response }) {
    return view.render("admin/dashboard/create");
  }

  async show({ view, request, response, params }) {
    try {
      let brand = await Database.raw(`
        SELECT dashboard.id,
        dashboard.title, dashboard.img_url, dashboard.description,
        concat(users.f_name, ' ', users.l_name) as user,
        dashboard.user_id, dashboard.created_at, dashboard.updated_at
        FROM dashboard
        INNER JOIN users
        ON dashboard.user_id = users.id
        WHERE dashboard.id = ${params.id}
        LIMIT 1
      `);
      brand = brand[0][0];

      return view.render("admin/dashboard/show", { brand });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async edit({ view, request, response, params }) {
    try {
      let dashboard = await Database.raw(
        `
        SELECT dashboard.id, 
         dashboard.title,dashboard.img_url,
         dashboard.description,
         concat( users.f_name, " " ,users.l_name) as user,  
        dashboard.user_id, dashboard.created_at ,  dashboard.updated_at  
        FROM dashboard
        INNER JOIN users
        ON dashboard.user_id= users.id 
        WHERE dashboard.id= ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
    `
      );
      dashboard = dashboard[0][0];

      return view.render("admin/dashboard/edit", { dashboard });
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
        UPDATE dashboard
        SET
        title = ${sanitize.escape(post.title)},
        img_url = ${sanitize.escape(post.img_url)},
        description = ${sanitize.escape(post.description)}
        WHERE id = ${id}
      `);

      return response.redirect(`/admin/dashboard/${id}`);
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async delete({ request, response, params }) {
    try {
      const id = params.id;
      await Database.raw(`
        DELETE FROM dashboard
        WHERE id = ${id}
      `);

      return response.redirect(`/admin/dashboard`);
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
}

module.exports = DashboardController;
