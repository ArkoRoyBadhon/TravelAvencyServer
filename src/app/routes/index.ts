import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { serviceRoutes } from '../modules/service/service.routes'
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
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
