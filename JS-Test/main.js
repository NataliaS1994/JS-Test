// Programing Basics
for (let i = 1; i <= 100; i++) {
    console.log("Given number is " + i);

    if (i % 3 === 0){
        console.log("This is divisible by 3");
    }
    if (i % 5 === 0){
        console.log("This is divisible by 5");
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Ops,Jackpot!");
    }
}

//DOM Manipulation
const createImageButton = function () {
    const button = document.createElement ("button");
    button.innerHTML = "Get image";
    button.onclick = function (){
        const image = document.createElement ("img");
        image.src = "http://placekitten.com/200/300";
        document.body.appendChild(image);
    };
    document.body.appendChild(button);
};
createImageButton();

//Async API calls
async function getTheFirstUsers (){
    const fetchData = await fetch('https://reqres.in/api/users');
    const jsonData = await fetchData.json();
    const showUsers =jsonData.data.slice(0,3)
    showUsers.forEach (user => {
        const userDivSection =document.createElement ("div");
        userDivSection.innerText =user.first_name;
        document.body.appendChild(userDivSection);
    });
}
getTheFirstUsers();