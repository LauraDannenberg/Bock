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

export const chatProxy = createProxyMiddleware({
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/chat': '',
    },
    ws: true,
    on: {
      proxyReq: (proxyReq, req, res) => {
        console.log('Proxying request to:', proxyReq.path);
      },
      proxyRes: (proxyRes, req, res) => {
        console.log('Received response from target', res.statusCode);
      },
      error: (err, req, res) => {
        console.error('Error in proxy:', err.message);
      },
    },
  });
  