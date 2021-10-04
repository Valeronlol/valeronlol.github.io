import routes from './routes.json'

const isCurrentPath = path => path === window.location.pathname

const getCurrentRoute = currentPath => {
    console.log('CONSOLE: currentPath', currentPath);
    if (currentPath.endsWith('/') && currentPath !== '/') {
        currentPath = currentPath.slice(0, -1)
    }

    return routes.find(route => route.target === currentPath)
}

const routesWithoutMain = routes.filter(({ target }) => target !== '/')

export {
    routesWithoutMain as routes,
    isCurrentPath,
    getCurrentRoute,
}
