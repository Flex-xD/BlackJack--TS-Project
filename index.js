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
class GamePlayers {
    constructor(cards) {
        this.cards = cards;
    }
    cardsForHitting() {
    }
    hit() {
    }
    stand() {
    }
}
// * Game's Player
class Player extends GamePlayers {
    constructor(cards) {
        super(cards);
        // this.cards = cards
    }
    static generateRandomCards() {
        let shuffledDeck = deck_1.OriginalDeck.shufflingCards();
        let randomOne = Math.floor(Math.random() * (shuffledDeck.length));
        let randomTwo = Math.floor(Math.random() * (shuffledDeck.length));
        deck_1.OriginalDeck.shufflingCards();
        let playerCards = [shuffledDeck[randomOne], shuffledDeck[randomTwo]];
        return playerCards;
    }
}
class Dealer extends GamePlayers {
    constructor(cards) {
        super(cards);
    }
    static generateRandomCards() {
        let shuffledDeck = deck_1.OriginalDeck.shufflingCards();
        let randomOne = Math.floor(Math.random() * (shuffledDeck.length));
        let randomTwo = Math.floor(Math.random() * (shuffledDeck.length));
        deck_1.OriginalDeck.shufflingCards();
        let dealerCards = [shuffledDeck[randomOne], shuffledDeck[randomTwo]];
        return dealerCards;
    }
}
const gameStarts = () => {
    const player = new Player(Player.generateRandomCards());
    const dealer = new Dealer(Dealer.generateRandomCards());
    console.log(player.cards);
    console.log(dealer.cards);
};
gameStarts();
