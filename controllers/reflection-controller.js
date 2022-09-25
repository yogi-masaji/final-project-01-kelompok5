const Reflection = require('../models/Reflection');
const jwt = require('jsonwebtoken');
const { emptyQuery } = require('pg-protocol/dist/messages');

class ReflectionController {
    static async create(req, res, next) {
        const {succes, low_point, take_away} = req.body;
        try{
            // Agar request tidak kosong
            if (!Object.keys(req.body).length) throw Error('Request Kosong');
            const addData = await Reflection.addReflection(succes, low_point, take_away, req.user.id);
            if(addData.succeed == true){
                res.status(201).json(addData.data);
            }
        }catch(err){
            next(err) //internal server error
        }
    }
    static async find(req, res, next) {
        try{
            const getData = await Reflection.getReflections(req.user.id);
            if(getData.succeed == true){
                const { data } = getData;
                res.status(200).json({
                    data
                });
            }
        }catch(err){
            next(err) //internal server error
        }
    }
}

module.exports = ReflectionController;