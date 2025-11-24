const ROUTES = [
    {
        url: '/users',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://user-service:5000",
            changeOrigin: true,
        }
    },
    {
        url: '/private',
        auth: true,
        creditCheck: false,
        proxy: {
            target: "http://cv-service:5555",
            changeOrigin: true,
        }
    }
];

export { ROUTES };