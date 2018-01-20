module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/content`,
                name: "content",
            },
        },
        `gatsby-transformer-remark`,
    ],
};