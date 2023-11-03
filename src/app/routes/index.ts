import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { serviceRoutes } from '../modules/service/service.routes'
import { reviewRoutes } from '../modules/reviews/reviews.routes'
import { bookingRoutes } from '../modules/booking/booking.routes'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/',
    route: userRoutes,
  },
  {
    path: '/',
    route: serviceRoutes,
  },
  {
    path: '/',
    route: reviewRoutes,
  },
  {
    path: '/',
    route: bookingRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
