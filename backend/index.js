import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js';
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { app, io, server } from './socket/socket.js';
dotenv.config({});


const PORT = process.env.PORT || 6969;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',  // Vite dev server
        'https://pingy-chat-app.vercel.app',
        "https://pingy-chat-app-git-main-divykasodariyas-projects.vercel.app",  // Your Vercel URL
        'https://pingy-chatapp.on.shiper.app'  // Your Shipper backend URL (if needed)
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log("user connected", socket.id);
    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
    });
});

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at port ${PORT}`);
});