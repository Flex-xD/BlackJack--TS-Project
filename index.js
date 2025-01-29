"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const deck_1 = require("./deck");
const prompt = (0, prompt_sync_1.default)();
let name = prompt("Enter the name: ");
console.log(`Hello, my name is ${name}`);
for (let i = 0; i < deck_1.deck.length; i++) {
    console.log(deck_1.deck[i]);
}
