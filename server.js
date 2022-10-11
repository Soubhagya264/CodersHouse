const express=require('express');
const dotenv = require('dotenv');
const app=express();
dotenv.config()
const PORT=process.env.PORT||5000;
const cors= require('cors');
const Routes =require('./routes/routes');
const DbConnection = require('./db/database');
const cookieParser = require('cookie-parser');
const corsOptions={
    origin:['http://localhost:3000'],
    credentials:true
};
app.use(cors(corsOptions));
app.use(cookieParser(cookieParser));
app.use(express.json({'limit':'8mb'}));
DbConnection();
app.use('/storage',express.static('storage'));


app.use(Routes);



app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
}
)
