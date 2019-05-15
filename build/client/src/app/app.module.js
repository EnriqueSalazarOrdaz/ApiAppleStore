"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms"); // 2 way data binding
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const navigation_component_1 = require("./components/navigation/navigation.component");
const game_form_component_1 = require("./components/game-form/game-form.component");
const game_list_component_1 = require("./components/game-list/game-list.component");
const game_service_1 = require("./services/game.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navigation_component_1.NavigationComponent,
            game_form_component_1.GameFormComponent,
            game_list_component_1.GameListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
            forms_1.FormsModule
        ],
        providers: [game_service_1.GameService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
