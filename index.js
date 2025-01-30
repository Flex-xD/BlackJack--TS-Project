"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const playersMoney = 100;
const playersFirstBid = false;
// ! Project critereas 
// ? #1 Make a bid verifying function 
// ? #2 Make a shuffling algorithm
// ? #3 Make a hit / stand function 
// ? #4 Make differnce between the player and the dealer
// ? #5 Make winning and losing criteria 
// * BID VERIFIER
const bidVerifier = (bid) => {
    if (bid < 0) {
        return "Invalid Bid !";
    }
    else if (bid > playersMoney) {
        return "Inavlid Bid !";
    }
};
deck_1.OriginalDeck.shufflingCards();
// for (let i = 0; i < OriginalDeck.deck.length; i++) {
//     console.log(OriginalDeck.deck[i]);
// }
