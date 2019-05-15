"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let GameFormComponent = class GameFormComponent {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.classes = 'row';
        this.game = {
            id: 0,
            title: '',
            description: '',
            image: '',
            created_at: new Date()
        };
    }
    ngOnInit() {
    }
    save() {
        delete this.game.id;
        delete this.game.created_at;
        this.gameService.saveGame(this.game).subscribe(res => {
            console.log(res);
            this.router.navigate(['/games']);
        }, err => {
            console.log(err);
        });
    }
};
__decorate([
    core_1.HostBinding('class')
], GameFormComponent.prototype, "classes", void 0);
GameFormComponent = __decorate([
    core_1.Component({
        selector: 'app-game-form',
        templateUrl: './game-form.component.html',
        styleUrls: ['./game-form.component.css']
    })
], GameFormComponent);
exports.GameFormComponent = GameFormComponent;
