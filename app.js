let inpbirth = document.getElementById("inpbirth")
let inpcurrent = document.getElementById("inpcurrent")
let get_Age = document.getElementById("get_Age")
let show = document.getElementById("show")

get_Age.addEventListener("click", () => {
    let inpbir = inpbirth.value
    let inpCur = inpcurrent.value

    if(inpCur != "" && inpbir != ""){
        let minusvalue = inpCur - inpbir
        show.innerText = `Age ${minusvalue}`
    }else{
        show.innerText = "please inpur filled"
    }

    

})