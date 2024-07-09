import { createProxyMiddleware } from 'http-proxy-middleware';
/**
 
Weiterleitung an das Frontend*/
export const frontendProxy = createProxyMiddleware({
    target: 'http://localhost:8080/',
    changeOrigin: true,
    pathRewrite: {
        '^/bock': '',
    },
    on: {
        proxyReq: (proxyReq, req) => {
            console.log("request proxy to frontend",req.statusCode)
        },
        proxyRes: (proxyRes, req, res) => {
            console.log("response proxy from frontend",res.statusCode)
        },
        error: (err) => {
            console.log("request proxy to frontend: error", err)
        },
    }
});

export const chatProxy = createProxyMiddleware({
  target: 'http://localhost:4000/',
  changeOrigin: true,
  pathRewrite: {
    '^/chat': '',
  },
  ws: true,
  on: {
    proxyReq: (proxyReq) => {
      console.log('Proxying request to:', proxyReq.path);
    },
    proxyRes: (proxyRes, req, res) => {
      console.log('Received response from target', res.statusCode);
    },
    error: (err) => {
      console.error('Error in proxy:', err.message);
    },
  },
});


// ---------------------------------------
export const fileProxy = createProxyMiddleware({
    target: 'http://localhost:6600/',
    changeOrigin: true,
    pathRewrite: {
        '^/stor': '',
    },
});
