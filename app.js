// enoncé 1

let numberOfNames = prompt("Saisissez le nombre de nom")
let list =[];

for(let index = 0;index<numberOfNames;index++) {
    list.push(prompt("Saisissez un nom"))
}

if(numberOfNames>3){
    let retour =`vous avez enregristré ${numberOfNames} qui sont: ${list} C'est beaucoups de noms!; `;
    console.log(retour)
}
else {
    let retour = `vous avez enregistré ${numberOfNames} qui sont: ${list}`;
    console.log(retour)
};


