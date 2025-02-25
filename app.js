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
        const startDate = new Date(`${inpbir}`).getTime();
        const endDate = new Date(`${inpCur}`).getTime();
        let minusYear = endYear - startYear;
        let minusvalue = endDate - startDate;

        const millisecondsDifference = minusvalue / (1000 * 60 * 60 * 24);
        const diffMilliseconds = minusvalue;
        const diffSeconds = diffMilliseconds / 1000;
        const diffMinutes = diffSeconds / 60;
        const diffHours = diffMinutes / 60;
        const diffDays = diffHours / 24;

        // console.log(`Milliseconds: ${diffMilliseconds}`);
        // console.log(`Seconds: ${diffSeconds}`);
        // console.log(`Minutes: ${diffMinutes}`);
        // console.log(`Hours: ${diffHours}`);
        // console.log(`Days: ${diffDays}`);
        
        show.innerHTML = `
                    <div class="dataShow">Age <br> ${minusYear}</div>
                    <div class="dataShow">Days <br> ${diffDays}</div>
                    <div class="dataShow">Hours <br> ${diffHours}</div>
                    <div class="dataShow">Minutes <br> ${diffMinutes}</div>
                    <div class="dataShow">Seconds <br> ${diffSeconds}</div>
                    <div class="dataShow">Milliseconds <br> ${diffMilliseconds}</div>
        `
    } else {
        show.innerText = "please input filled"
    }
})


