import { createProxyMiddleware } from 'http-proxy-middleware';
/**
 * Weiterleitung an das Frontend
 */
export const frontendProxy = createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
        '^/crow': '',
    },
});