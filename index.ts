import { OriginalDeck } from "./deck";
import { decks } from "./deck";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const playersMoney = 100;
const playersFirstBid: boolean = false;

// ! Project critereas 
// ? #1 Make a bid verifying function 
// ? #2 Make a shuffling algorithm
// ? #3 Make a hit / stand function 
// ? #4 Make differnce between the player and the dealer
// ? #5 Make winning and losing criteria 

// * BID VERIFIER
const bidVerifier = (bid: number): any => {
    if (bid < 0) {
        return "Invalid Bid !"
    } else if (bid > playersMoney) {
        return "Inavlid Bid !"
    }
}

// * Dealer and Player
type card = { value: string; suit: string };
type gameCards = card[];

abstract class GamePlayers {
    cards: gameCards
    constructor(cards: gameCards) {
        this.cards = cards
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
    constructor(cards: gameCards) {
        super(cards)
        // this.cards = cards
    }
    static generateRandomCards(): gameCards {
        let shuffledDeck = OriginalDeck.shufflingCards()
        let randomOne = Math.floor(Math.random() * (shuffledDeck.length));
        let randomTwo = Math.floor(Math.random() * (shuffledDeck.length));
        OriginalDeck.shufflingCards();
        let playerCards = [shuffledDeck[randomOne], shuffledDeck[randomTwo]];
        return playerCards;
    }
}

class Dealer extends GamePlayers {
    constructor(cards:gameCards) {
        super(cards);
    }
    static generateRandomCards(): gameCards {
        let shuffledDeck = OriginalDeck.shufflingCards()
        let randomOne = Math.floor(Math.random() * (shuffledDeck.length));
        let randomTwo = Math.floor(Math.random() * (shuffledDeck.length));
        OriginalDeck.shufflingCards();
        let dealerCards = [shuffledDeck[randomOne], shuffledDeck[randomTwo]];
        return dealerCards;
    }
}

const gameStarts = () => {
    const player = new Player(Player.generateRandomCards());
    const dealer = new Dealer(Dealer.generateRandomCards());
    console.log(player.cards);
    console.log(dealer.cards);
}

gameStarts()