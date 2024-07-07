import { createProxyMiddleware } from 'http-proxy-middleware';
/**
 * Weiterleitung an das Frontend
 */
export const frontendProxy = createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
        '^/bock': '',
    },
});

export const dataProxy = createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/dat': '',
    },
}); 


// ---------------------------------------
export const fileProxy = createProxyMiddleware({
    target: 'http://localhost:6600',
    changeOrigin: true,
    pathRewrite: {
        '^/stor': '',
    },
});
