"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //    res.send('hello')
        res.json({ text: 'API is /api/games' });
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
