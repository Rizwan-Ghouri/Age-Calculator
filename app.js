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
    const startmilli = new Date(`${inpbir}`).getTime();
    const endmilli = new Date(`${inpCur}`).getTime ();
    const millisecondsDifference = (minusvalue)/ (1000 * 60 );
        show.innerText = `Age ${minusvalue},${millisecondsDifference}`
    } else {
        show.innerText = "please inpur filled"
    }
})