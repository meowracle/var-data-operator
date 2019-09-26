function tinhNhietDo() {
    let a=document.getElementById("cen").value;
    let c=parseInt(a);
    let f=(9*c+160)/5;
    document.getElementById("fra").innerHTML=f;
}