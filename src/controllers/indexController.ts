import {Request, Response} from 'express';


class IndexController{

   index (req: Request,res: Response){ 
    //    res.send('hello')
    res.json({text:'API is /api/games'})
}
}

export const indexController = new IndexController();
export default indexController;
