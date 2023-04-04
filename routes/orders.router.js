const express = require("express");

const OrderService = require("./../services/order.service.js");
const {
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema,
  addItemSchema,
} = require("./../schemas/order.schema.js");

const validatorHandler = require("./../middlewares/validator.handler.js");

const service = new OrderService();

const router = express.Router();

router.get("/", validatorHandler(getOrderSchema), async (req, res) => {
  try {
    const orders = await service.find();
    res.status(201).json(orders);
  } catch (error) {
    console.error(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getOrderSchema, "params"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.status(201).json(order);
    } catch (err) {
      console.error(err);
    }
  }
);

router.post(
  "/",
  validatorHandler(createOrderSchema, "body"),
  async (req, res) => {
    try {
      const data = req.body;
      const order = await service.create(data);
      res.status(201).json(order);
    } catch (err) {
      console.error(err);
    }
  }
);

router.post("/add-item", validatorHandler(addItemSchema, "body"), async (req, res) => {
  try {
    const body = req.body;
    const newItem = await service.createItem(body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
