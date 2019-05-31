const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
  proponent: {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      cep: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      street: {
        type: String,
        required: true
      },
      neighborhood: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      }
    },
    phone: {
      type: String,
      required: true
    }
  },
  movie: {
    title: {
      type: String,
      required: true
    },
    parentalRating: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    }
  },
  productionMovie: {
    directorName: {
      type: String,
      required: true
    },
    photographyDirection: {
      type: String,
      required: true
    },
    artDirection: {
      type: String,
      required: true
    },
    production: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    executiveProduction: {
      type: String,
      required: true
    },
    setting: {
      type: String,
      required: true
    },
    sound: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    passwordVideo: {
      type: String,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Subscription = mongoose.model('Subscriptions', SubscriptionSchema)

module.exports = Subscription
