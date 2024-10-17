function convertCurrency() {
    const usd = parseFloat(document.getElementById('us_doller').value) ;
    const sar = parseFloat(document.getElementById('sa_riyal').value) ;

    const usdToPkr = 104.80;
    const sarToPkr = 28;

    const totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

    document.getElementById('result').innerText = `Total in Pakistani Rupees: ${totalPkr.toFixed(2)}`;
}
function restart(){
    document.getElementById('result').innerText ="";
    document.getElementById('us_doller').value="";
    document.getElementById('sa_riyal').value="";

}