export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notas-SYS",
      version: "1.0.0",
      description: "A simple express library API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
