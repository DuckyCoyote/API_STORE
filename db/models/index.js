const { User, UserSchema } = require('./user.model.js');
const { Customer, CustomerSchema } = require('./customer.model.js');
const { Category, CategorySchema } = require('./category.model.js');
const { Product, ProductSchema } = require('./product.model.js');
const { Orders, OrderSchema } = require('./order.model.js');
const { OrderProduct, OrderProductSchema } = require('./order-product.model.js');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Orders.init(OrderSchema, Orders.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Orders.associate(sequelize.models);
}

module.exports = setupModels;