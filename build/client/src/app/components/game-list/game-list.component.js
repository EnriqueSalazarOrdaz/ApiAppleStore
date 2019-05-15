"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let GameListComponent = class GameListComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.classes = 'row';
        this.games = [];
    }
    ngOnInit() {
        this.getGames();
    }
    getGames() {
        this.gameService.getGames().subscribe(res => {
            this.games = res;
        }, err => console.log(err));
    }
    deleteGame(id) {
        this.gameService.deleteGame(id)
            .subscribe(res => {
            console.log(res);
            this.getGames();
        }, err => console.error(err));
    }
};
__decorate([
    core_1.HostBinding('class')
], GameListComponent.prototype, "classes", void 0);
GameListComponent = __decorate([
    core_1.Component({
        selector: 'app-game-list',
        templateUrl: './game-list.component.html',
        styleUrls: ['./game-list.component.css']
    })
], GameListComponent);
exports.GameListComponent = GameListComponent;
