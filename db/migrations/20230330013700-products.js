'use strict';

const { CategorySchema, CATEGORY_TABLE} = require('./../models/category.model.js');
const { ProductSchema, PRODUCT_TABLE} = require('./../models/product.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(CATEGORY_TABLE);
    await queryInterface.drop(PRODUCT_TABLE);
  }
};
