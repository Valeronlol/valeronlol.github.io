import routes from './routes.json'

const isCurrentPath = path => path === window.location.pathname

const getCurrentRoute = currentPath => routes.find(route => route.target === currentPath)

const routesWithoutMain = routes.filter(({ target }) => target !== '/')

export {
    routesWithoutMain as routes,
    isCurrentPath,
    getCurrentRoute,
}
