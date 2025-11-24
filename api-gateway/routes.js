const ROUTES = [
    {
        url: '/public',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:3000",
            changeOrigin: true,
        }
    },
    {
        url: '/private',
        auth: true,
        creditCheck: false,
        proxy: {
            target: "http://localhost:5555",
            changeOrigin: true,
        }
    }
];

export { ROUTES };