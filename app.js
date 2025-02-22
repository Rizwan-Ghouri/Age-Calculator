let inpbirth = document.getElementById("inpbirth")
let inpcurrent = document.getElementById("inpcurrent")
let get_Age = document.getElementById("get_Age")
let show = document.getElementById("show")

get_Age.addEventListener("click", () => {
    let inpbir = inpbirth.value
    let inpCur = inpcurrent.value

    if (inpCur != "" && inpbir != "") {
        const startYear = new Date(`${inpbir}`).getFullYear();
        const endYear = new Date(`${inpCur}`).getFullYear();
        let minusvalue = endYear - startYear;        
    
        const millisecondsDifference = (endYear - startYear) / (1000 * 60 * 60 * 24);
        show.innerText = `Age ${minusvalue} , ${millisecondsDifference}`
    } else {
        show.innerText = "please inpur filled"
    }
})
const startDate = new Date("2000-01-01");
const endDate = new Date("2025-01-01");

const diffMilliseconds = endDate - startDate;
const diffSeconds = diffMilliseconds / 1000;
const diffMinutes = diffSeconds / 60;
const diffHours = diffMinutes / 60;
const diffDays = diffHours / 24;

console.log(`Milliseconds: ${diffMilliseconds}`);
console.log(`Seconds: ${diffSeconds}`);
console.log(`Minutes: ${diffMinutes}`);
console.log(`Hours: ${diffHours}`);
console.log(`Days: ${diffDays}`);
