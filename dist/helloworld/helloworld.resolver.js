"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloworldResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let HelloworldResolver = class HelloworldResolver {
    helloWorld() {
        return 'Hola mundo';
    }
    getRandomNumber() {
        return Math.random() * 100;
    }
    getRandomFromZeroTo(max) {
        return Math.floor(Math.random() * max);
    }
};
exports.HelloworldResolver = HelloworldResolver;
__decorate([
    (0, graphql_1.Query)(() => String, {
        name: 'hello',
        description: 'Hola mundo es lo que retorna',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HelloworldResolver.prototype, "helloWorld", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Float, {
        name: 'randomNumber',
        description: 'Devuelve un numero aleatorio entre 0 y 1',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], HelloworldResolver.prototype, "getRandomNumber", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Int, {
        name: 'randomNumberFromZeroTo',
        description: 'Devuelve un numero aleatorio entre 0 y el numero que se le pase',
    }),
    __param(0, (0, graphql_1.Args)('max', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], HelloworldResolver.prototype, "getRandomFromZeroTo", null);
exports.HelloworldResolver = HelloworldResolver = __decorate([
    (0, graphql_1.Resolver)()
], HelloworldResolver);
//# sourceMappingURL=helloworld.resolver.js.map