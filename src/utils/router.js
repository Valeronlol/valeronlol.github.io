import routes from './routes.json'

const clearPath = path => {
    if (path.endsWith('/') && path !== '/') {
        return path.slice(0, -1)
    }

    return path
}

const isCurrentPath = path => path === clearPath(window.location.pathname)

const getCurrentRoute = currentPath => {
    const clearCurrentPath = clearPath(currentPath)
    return routes.find(route => route.target === clearCurrentPath)
}

const routesWithoutMain = routes.filter(({ target }) => target !== '/')

export {
    routesWithoutMain as routes,
    isCurrentPath,
    getCurrentRoute,
    clearPath,
}
