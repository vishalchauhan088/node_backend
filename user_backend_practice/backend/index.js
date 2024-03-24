import express from 'express';
import dotenv from 'dotenv'
import userRouter from './app/routes/userRoutes.js'
import connectDB from './config/db.js';
dotenv.config()

const app = express();
app.use(express.json());

connectDB()
    .then(()=>{
       
        const port = process.env.PORT || 5000;

        // middleware

        app.use((req,res,next)=>{
            console.log('this is dummy middleware');
            console.log(process.env.URI);
            console.log(process.env.PASSWORD);
            next(); // calling next middleware
        });

        app.use('/api/v1/users',userRouter)



        app.get('/',(req,res)=>{
            res.send("home");
        })

        app.listen(port, ()=>{
            console.log(`Server started at port: ${port}`);
        })
    })
    .catch(error => {
        console.log(`error while connecting in index ${error}`)
    });

