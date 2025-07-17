import Sets from "./sets.js";

const main = document.getElementById("main");

let allSets = JSON.parse(localStorage.getItem("sets")) || [];
console.log(allSets);
allSets = allSets.map(obj => Object.assign(new Sets(), obj)); // Object . assign


allSets.forEach(element => {



    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newH2_2 = document.createElement("h2");

    newDiv.setAttribute("class", "setBox");
    // newDiv.setAttribute("id", id)
    main.append(newDiv);

    newH2.setAttribute("class", "setBoxh2");
    newH2.textContent = element.getName();
    newDiv.append(newH2)

    newH2_2.setAttribute("class", ".setBox h2");
    newH2_2.textContent = element.getDescription();
    console.log(element.getName());
    newDiv.append(newH2_2)


});


document.querySelectorAll()

