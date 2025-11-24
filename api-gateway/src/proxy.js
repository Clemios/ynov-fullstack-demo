import { createProxyMiddleware } from 'http-proxy-middleware';
import { ROUTES } from '../routes.js';

const setupProxies = (app) => {
    ROUTES.forEach(route => {
        app.use(route.url, createProxyMiddleware(route.proxy));
    })
}

export { setupProxies };