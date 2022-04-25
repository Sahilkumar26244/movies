// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",addWallet);

function addWallet(){
    let rs = localStorage.getItem("amount");
    if(rs!==NaN)
    {
        let amt = document.getElementById("amount").value;
        console.log(amt)
        if(rs>0)
        { 
            amt=parseInt(amt)+parseInt(rs); 
        }
       
        localStorage.setItem("amount",amt);
        
        document.getElementById("wallet").innerText=localStorage.getItem("amount");
    }
}

