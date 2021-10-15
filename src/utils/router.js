import routes from './routes.json'

const clearPath = (path) => {
    if (path.endsWith('/') && path !== '/') {
        return path.slice(0, -1)
    }

    return path
}

const isCurrentPath = path => path === window.location.pathname

const getCurrentRoute = currentPath => {
    const clearPath = clearPath(currentPath)
    routes.find(route => clearPath(route.target) === clearPath)
}

const routesWithoutMain = routes.filter(({ target }) => target !== '/')

export {
    routesWithoutMain as routes,
    isCurrentPath,
    getCurrentRoute,
    clearPath,
}
