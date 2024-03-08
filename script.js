const access_key = '7c47a26f6d0de22ec7fe1b96fac45f12';

const selectElement = document.getElementById("currency");

selectElement.addEventListener("change",selectCurrency);
async function selectCurrency(){
    const amount = document.getElementById("amount");
    if(amount.value===""){ document.getElementById("warning").innerHTML="Please enter the amount to convert !";
                         selectElement.value = "select";
                         } 
                            else     {
                                let symbol = selectElement.value;
                                const rate = await getCurrency(symbol);  
                                display(rate);
                                     }
                               }

async function getCurrency(symbol){
    const base = "EUR";
    let endpoint = "latest";
    response = await fetch(`http://data.fixer.io/api/${endpoint}?access_key=7c47a26f6d0de22ec7fe1b96fac45f12&base=${base}&symbols=${symbol}`);
    const data = await response.json();
    console.log(data);
    return data.rates[symbol];
}

async function display(rate){
     const output =  document.getElementById("display");
     const amount = document.getElementById("amount");
     const number = parseFloat(rate);
     let amountToConvert = amount.value;
     output.value = number*amountToConvert;
     document.getElementById("warning").innerHTML = "";
     
}





