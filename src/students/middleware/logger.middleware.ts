import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class LoggerMiddelware implements NestMiddleware {
    use(req:Request,res:Response,nest:NextFunction){
        console.log(`Incoming Request: ${req.method} ${req.url}`);
        nest();
    }
}