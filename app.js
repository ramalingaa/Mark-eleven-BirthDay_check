var inputDate = document.querySelector("#input-date");
var luckyNumber = document.querySelector("#lucky-number");
var btnClick = document.querySelector("#btn-click");
var outPutMark = document.querySelector("#output-mark");

function clickHandler(){
    let inputDateIn = String(inputDate.value);
    let luckyNumberIn = Number(luckyNumber.value);
    let yearPart = inputDateIn.slice(0, 4);
    let monthPart = inputDateIn.slice(5, 7);
    let dayPart = inputDateIn.slice(8, 10);
    let newDateNumber = (Number(yearPart) + Number(monthPart) + Number(dayPart));
    if(newDateNumber !== 0 && luckyNumberIn !== 0){
        if(newDateNumber % luckyNumberIn === 0){
            showMessage();
        }
        else{
            hideMessage();
        }
    }
    else{
        let errorhangler = "Please fill in required fields";
        outPutMark.innerText = errorhangler;
    }






        function showMessage(){
            let msg = "Yay!🎉🎁🥳Your birthday is a lucky day";
            outPutMark.innerText = msg;
        }
        function hideMessage(){
            let errorMsg = "No worries! your birthday is a special day for many 🍻🍸";
            outPutMark.innerText = errorMsg;
        }
}

btnClick.addEventListener("click", clickHandler)
