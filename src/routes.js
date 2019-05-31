const express = require("express");
const routes = express.Router();
const validate = require("express-validation");

const SubscriptionController = require("./app/controllers/SubscriptionController");
const validators = require("./app/validators/Subscription");

routes.post(
  "/subscriptions",
  validate(validators),
  SubscriptionController.store
);

module.exports = routes;
