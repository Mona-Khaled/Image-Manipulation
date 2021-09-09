const PythonShell = require("python-shell").PythonShell;
const express = require("express");
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
  });
  //*******************************************************************************/
app.use(cors());
app.options('*', cors());
//************************** Access Origin *****************************************/
const runPythonCode = (req, res, next) => {
    console.log("inside the python code");
    let options = {
       
        pythonOptions: ['-u'], // get print results in real-time
        args: ["D:\\Fast-AgingGAN-master\\UTKface_inthewild\\images"]
      };
      
    PythonShell.run(
      "D:/Fast-AgingGAN-master/infer.py",
      null,
      function (err, message) {
        if (err) console.log(err);
        console.log(message);
        console.log(typeof message);
      }
    );
   
    console.log("out");
    next();
  };
  app.get("/", runPythonCode, function (req, res) {
    res.send("Hello World!");
  });
  app.listen(8080, function () {
    console.log(new Date() + " Server is listening on port 8080");
  })
