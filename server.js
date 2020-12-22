import express from 'express';
import cors from "cors";
const app = express()

// const whitelist = ["http://localhost:3000"];

// const corsOptions = {
//   credentials: true, //to allow cookes from front-end
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello from the latest server")
})

app.post('/post', (req, res)=>{
    console.log(req.body)
    // if(req.body){
    //     return res.send('Data received successfully')
    // }
    // else{
    //     return res.send('No data found')
    // }
})

app.listen(9980, () => console.log('server is up at port 9980'))