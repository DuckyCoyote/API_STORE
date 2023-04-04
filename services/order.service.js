const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize.js");

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Orders.create(data);
    return newOrder;
  }

  async createItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const orders = await models.Orders.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Orders.findByPk(id, {
      include: [
        {
          association: "customer",
          include: ["user"],
        },
        "items",
      ],
    });
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = OrderService;
