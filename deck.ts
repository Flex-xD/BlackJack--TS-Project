
type cards = { value: string; suit: string }[];

export class decks{
    deck:cards
    constructor(deck:cards) {
        this.deck = deck
    }
    shufflingCards () {
        // ? I am using Fisher Yates shuffling algorithm here
        let shuffledCards = [...OriginalDeck.deck];
        for (let i = OriginalDeck.deck.length - 1 ; i > 0; i --) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i] , shuffledCards[j]] = [shuffledCards[j] , shuffledCards[i]];
        }
        console.log(shuffledCards)
        return shuffledCards as cards;
    }
}


export const OriginalDeck = new decks([
    { value: "2", suit: "hearts" },
    { value: "3", suit: "hearts" },
    { value: "4", suit: "hearts" },
    { value: "5", suit: "hearts" },
    { value: "6", suit: "hearts" },
    { value: "7", suit: "hearts" },
    { value: "8", suit: "hearts" },
    { value: "9", suit: "hearts" },
    { value: "10", suit: "hearts" },
    { value: "J", suit: "hearts" },
    { value: "Q", suit: "hearts" },
    { value: "K", suit: "hearts" },
    { value: "A", suit: "hearts" },

    { value: "2", suit: "diamonds" },
    { value: "3", suit: "diamonds" },
    { value: "4", suit: "diamonds" },
    { value: "5", suit: "diamonds" },
    { value: "6", suit: "diamonds" },
    { value: "7", suit: "diamonds" },
    { value: "8", suit: "diamonds" },
    { value: "9", suit: "diamonds" },
    { value: "10", suit: "diamonds" },
    { value: "J", suit: "diamonds" },
    { value: "Q", suit: "diamonds" },
    { value: "K", suit: "diamonds" },
    { value: "A", suit: "diamonds" },

    { value: "2", suit: "clubs" },
    { value: "3", suit: "clubs" },
    { value: "4", suit: "clubs" },
    { value: "5", suit: "clubs" },
    { value: "6", suit: "clubs" },
    { value: "7", suit: "clubs" },
    { value: "8", suit: "clubs" },
    { value: "9", suit: "clubs" },
    { value: "10", suit: "clubs" },
    { value: "J", suit: "clubs" },
    { value: "Q", suit: "clubs" },
    { value: "K", suit: "clubs" },
    { value: "A", suit: "clubs" },

    { value: "2", suit: "spades" },
    { value: "3", suit: "spades" },
    { value: "4", suit: "spades" },
    { value: "5", suit: "spades" },
    { value: "6", suit: "spades" },
    { value: "7", suit: "spades" },
    { value: "8", suit: "spades" },
    { value: "9", suit: "spades" },
    { value: "10", suit: "spades" },
    { value: "J", suit: "spades" },
    { value: "Q", suit: "spades" },
    { value: "K", suit: "spades" },
    { value: "A", suit: "spades" }
]);