import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { serviceRoutes } from '../modules/service/service.routes'
import { reviewRoutes } from '../modules/reviews/reviews.routes'
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
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
