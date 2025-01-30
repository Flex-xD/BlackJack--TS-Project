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

OriginalDeck.shufflingCards();



// for (let i = 0; i < OriginalDeck.deck.length; i++) {
//     console.log(OriginalDeck.deck[i]);
// }