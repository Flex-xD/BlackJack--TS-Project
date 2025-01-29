import PromptSync from "prompt-sync";
import { deck } from "./deck";

const prompt = PromptSync();

let playersFirstBid: boolean = false;

const verifyingBid = (bid: number): string | boolean => {
    if (playersFirstBid === false) {
        if (bid < 0) {
            return "Invalid Bid !"
        } else if (bid < 100) {
            return "First bid of the game must be of 100$ !"
        } else {
            return playersFirstBid = true;
        }
    }
    return playersFirstBid = true;
}

const blackJack = (bid:number) :unknown => {
    let playersBid = prompt("Enter the amount of Bid !")
    if (verifyingBid(bid) === (playersFirstBid === true)) {
        console.log(bid);
    }
    return "hello"
}
