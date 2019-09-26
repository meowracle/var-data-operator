function tinhTong() {
    let phy = document.getElementById("physic").value;
    let che = document.getElementById("chemistry").value;
    let bio = document.getElementById("biology").value;
    let a=parseInt(phy);
    let b=parseInt(che);
    let c=parseInt(bio);
    let d=a+b+c;
    let e=d/3;
    document.getElementById("sum").innerHTML=d;
    document.getElementById("avarage").innerHTML=e;

}