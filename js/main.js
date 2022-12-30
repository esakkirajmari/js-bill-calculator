function myfunction(){
    let price=parseInt(document.getElementById("billAmount").value);
    let tips=document.getElementById("tippercentage").value;
    let rateamount=parseInt((price*tips)/100);
    document.getElementById("tipAmount").value=rateamount;
    let rate=price+rateamount;
    document.getElementById("totalAmount").value=rate;
    console.log("your amount is " + rate);
}