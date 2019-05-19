"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let GameService = class GameService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://157.230.223.107:3000/api';
    }
    getGames() {
        return this.http.get(`${this.API_URI}/games`);
    }
    getGame(id) {
        return this.http.get(`${this.API_URI}/games/${id}`);
    }
    deleteGame(id) {
        return this.http.delete(`${this.API_URI}/games/${id}`);
    }
    saveGame(game) {
        return this.http.post(`${this.API_URI}/games`, game);
    }
    updateGame(id, updatedGame) {
        return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
    }
};
GameService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], GameService);
exports.GameService = GameService;
