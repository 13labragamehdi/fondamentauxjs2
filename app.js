// enoncé 1

let numberOfNames = prompt("Saisissez le nombre de nom")
let list =[];

for(let index = 0;index<numberOfNames;index++) {
    list.push(prompt("Saisissez un nom"))
}

if(numberOfNames>3){
    let retour =`vous avez enregristré ${numberOfNames}  noms qui sont: ${list} C'est beaucoups de noms!; `;
    console.log(retour)
}
else {
    let retour = `vous avez enregistré ${numberOfNames} noms qui sont: ${list}`;
    console.log(retour)
};
function names(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        }
}
names(list)
