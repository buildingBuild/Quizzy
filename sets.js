let allSets = [];

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
}

document.addEventListener("DOMContentLoaded", () => {
    const addSets = document.getElementById("addSets");
    const theSetTitle = document.getElementById("theSetTitle");
    const theSetDescription = document.getElementById("theSetDescription");

    if (addSets) {
        addSets.addEventListener("click", validateSet);
    }

    function validateSet() {
        const title = theSetTitle.value;
        if (title === "") {
            window.alert("Enter Title for Set");
            return;
        }
        const description = theSetDescription.value;
        console.log(title);
        console.log(description);

        const newSet = new Sets(title, description);
        allSets.push(newSet);
        localStorage.setItem("sets", JSON.stringify(allSets));

        window.location.href = "library.html";
    }
});

export default Sets;

/* 
const flashCard = {
    question: "Enter a question",
    answer: "I am an answer",
    difficulty: "I range from 1-5 in terms of difficulty",
};
*/
