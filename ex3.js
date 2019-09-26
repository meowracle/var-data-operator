function tinhDienTich() {
    let a=document.getElementById("rad").value;
    let r=parseInt(a);
    let b=r*r*Math.PI;
    let c=2*r*Math.PI;
    document.getElementById("area").innerHTML=b;
    document.getElementById("cir").innerHTML=c;

}