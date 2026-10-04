
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../../router'
import { Home } from './Home'


export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})