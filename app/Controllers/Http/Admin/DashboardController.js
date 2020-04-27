"use strict";

class DashboardController {
  async index({ view, request, response }) {
    try {
      //   let allBrands = await Database.raw(`
      //     SELECT brands.id, brands.title, brands.img_url, brands.user_id,
      //     concat(users.f_name, " " ,users.l_name ) as user,
      //     brands.created_at, brands.updated_at
      //     FROM brands
      //     INNER JOIN users
      //     ON brands.user_id = users.id
      //     ORDER BY brands.title ASC
      //   `);
      //   allBrands = allBrands[0];
      let allBrands = "";

      return view.render("admin/dashboard/index", { allBrands });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async store({ request, response, params }) {
    try {
      const post = request.post();
      await Database.raw(
        `INSERT INTO brands (title,  img_url , description,user_id)
       Values(${sanitize.escape(post.title)}, 
        ${sanitize.escape(post.img_url)},
       ${sanitize.escape(post.description)} ,
       ${parseInt(1)})
    `
      );
      return response.redirect("/admin/brands");
    } catch (error) {
      console.log(error);
      return response.redirect("back");
      //  `<h1 style="color:red">There was an error<h1>
      // <h3>${error.sqlMessage}</h3>`;
    }
  }

  create({ view, request, response }) {
    return view.render("admin/brands/create");
  }

  async show({ view, request, response, params }) {
    try {
      let brand = await Database.raw(`
        SELECT brands.id,
        brands.title, brands.img_url, brands.description,
        concat(users.f_name, ' ', users.l_name) as user,
        brands.user_id, brands.created_at, brands.updated_at
        FROM brands
        INNER JOIN users
        ON brands.user_id = users.id
        WHERE brands.id = ${params.id}
        LIMIT 1
      `);
      brand = brand[0][0];

      return view.render("admin/brands/show", { brand });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async edit({ view, request, response, params }) {
    try {
      let brands = await Database.raw(
        `
        SELECT brands.id, 
         brands.title,brands.img_url,
         brands.description,
         concat( users.f_name, " " ,users.l_name) as user,  
        brands.user_id, brands.created_at ,  brands.updated_at  
        FROM brands
        INNER JOIN users
        ON brands.user_id= users.id 
        WHERE brands.id= ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
    `
      );
      brands = brands[0][0];

      return view.render("admin/brands/edit", { brands });
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
        UPDATE brands
        SET
        title = ${sanitize.escape(post.title)},
        img_url = ${sanitize.escape(post.img_url)},
        description = ${sanitize.escape(post.description)}
        WHERE id = ${id}
      `);

      return response.redirect(`/admin/brands/${id}`);
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }

  async delete({ request, response, params }) {
    try {
      const id = params.id;
      await Database.raw(`
        DELETE FROM brands
        WHERE id = ${id}
      `);

      return response.redirect(`/admin/brands`);
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
}

module.exports = DashboardController;
