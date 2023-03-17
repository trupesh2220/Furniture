const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();

const server = app.listen(4000);

process.on("unhandledRejection", (err) => {
  console.log(err, "shutdown server");
  server.close(()=>{
    process.exit(1)
  })
});
