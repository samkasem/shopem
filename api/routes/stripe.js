const router = require('express').Router()
//const stripe = require('stripe')(process.encv.STRIPE_KEY)

//const KEY = process.env.STRIPE_SECRET
const Stripe = require('stripe')
const stripe = Stripe(
  'sk_test_51LVfRSAJVc5mVDpD44ywBb7o9K8kbFlURnCxCod7jMSQUblCddd9fysV1KtrZ2FIqYL7PemVzxpmDrGWhEsoufhM0015Azde5n'
)
router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
})

module.exports = router
