import {Request, Response} from 'express';

import pool from '../database'

class GamesController{

   public async list (req: Request,res: Response){ 
   const games= await pool.query('SELECT * FROM games');
    //res.json({text: 'listing games'})
    res.json(games); 
    //    res.send('games')
}

public async getOne(req:Request,res:Response): Promise<any>{
    //res.json({text:'This is the game '+req.params.id})
    const{id}=req.params; //destructuring en js
    const games= await pool.query('SELECT * FROM games WHERE id= ?', [id])
    if(games.length>0){
        return res.json(games[0]);
    }
    res.status(404).json ({message: "'The game doesn't exists"})
    }


public async create (req:Request,res:Response): Promise<void>{
    //console.log(req.body); //datos que envia angular
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({message: 'game saved'})

}


public async delete(req:Request,res:Response):Promise<void>{
 const {id}= req.params;
 await  pool.query('DELETE FROM games WHERE id=?', [id]);
 res.json({message: 'the game was deleted '})

}

public async update(req:Request,res:Response):Promise<void>{
 const {id}= req.params;
 await  pool.query('UPDATE games set ? WHERE id= ?',[req.body, id]);
 res.json({message:'Updated game '})
}


}

export const gamesController = new GamesController();
export default gamesController;