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
type gamesBothCard = card[];

abstract class GamePlayers {
    protected cards: gamesBothCard
    constructor(cards: gamesBothCard) {
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
    constructor(cards: gamesBothCard) {
        super(cards)
        // this.cards = cards
    }
    static generateRandomCards(): gamesBothCard {
        let randomOne = Math.floor(Math.random() * (OriginalDeck.deck.length));
        let randomTwo = Math.floor(Math.random() * (OriginalDeck.deck.length));
        OriginalDeck.shufflingCards();
        return [OriginalDeck.shufflingCards()[randomOne], OriginalDeck.shufflingCards()[randomTwo]];
    }
}

const gameStarts = () => {
    let playersInitailCards = Player.generateRandomCards();
    const player = new Player(playersInitailCards);
    console.log(player); 
}

gameStarts()