import Addcar from "../models/AddcarModel";
import { errorHandler } from "../utills/error";

export const Addcar = async(req,res,next)=>{
    const{Carname,Fueltype,Carnumber,Price,Seat} = req.body;
    if(!Carname || !Fueltype || !Carnumber || !Price || !Seat){
        next(errorHandler(400,'All field are required'));
    }

    const newCar = new Addcar({
        Carname,
        Fueltype,
        Carnumber,
        Price,
        Seat,
    });

    try {
        await newCar.save();
        res.json('Added new car successfull!');
    } catch (error) {
        next(error);
    }
};