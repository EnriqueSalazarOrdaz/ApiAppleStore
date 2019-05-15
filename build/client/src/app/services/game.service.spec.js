"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const game_service_1 = require("./game.service");
describe('GameService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(game_service_1.GameService);
        expect(service).toBeTruthy();
    });
});
