const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "My Api",
        description: "Gospel Books Api"
    },
    host: "localhost: 3000",
    schemes: ["https", "http"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/users.js"];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);