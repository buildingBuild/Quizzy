function validateSet() {

    console.log("hELLO")
}

class Sets {

    constructor(name, description) {
        this.array_of_flashCards = [];
        this.name = name;
        this.description = description;

    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    addFlashCard(item) {
        this.array_of_flashCards.push(item);
    }

};




//xport default Sets;
/* 
const flashCard = {
    question: "Enter a question",
    answer: "I am an answer",
    difficulty: "I range from 1-5 in terms of difficulty",
};*/
