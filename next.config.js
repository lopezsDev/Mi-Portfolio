module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/github/:path*',
                destination: 'https://api.github.com/:path*',
            },
        ];
    },
};