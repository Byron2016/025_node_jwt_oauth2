import { Router } from 'express'

import base from './base'
import auth from './auth'
import user from './user'
import test from './test'

const routes = Router()

routes.use('/', base)
routes.use('/auth', auth)
routes.use('/users', user)
routes.use('/test', test)

export default routes

