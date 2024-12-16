const initApp = require("./server");
const port = process.env.PORT || 3000; // default port

initApp.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});