import { createRouter, createRootRoute } from '@tanstack/react-router'
import App from './App'
import { homeRoute } from './features/landing/router'


export const rootRoute = createRootRoute({
  component: App,
})

const routeTree = rootRoute.addChildren([
  homeRoute
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}