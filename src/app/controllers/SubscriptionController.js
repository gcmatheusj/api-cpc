const Subscription = require("../models/Subscription");

class SubscriptionController {
  async store(req, res) {
    const subscription = await Subscription.create(req.body);

    return res.json(subscription);
  }
}

module.exports = new SubscriptionController();
