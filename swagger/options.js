const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Joker's app",
            version: "1.0.0",
            description:
                "Simple API that uses firebase DB - a test project for recruitment purposes.",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "Wojciech Samborski",
                email: "wojciech.m.samborski@gmail.com"
            }
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/index.js"]
};

module.exports = options;
