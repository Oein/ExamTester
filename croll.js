let x = {};
document.querySelector("#startbtn").click();
const g = () => {
x["eng"] = document.querySelector("#ultramenu2").innerText.replaceAll("\t\n" , "");
document.querySelector("#multi4").click()
setTimeout(() => {
    x["kor"] = document.querySelector("#ultramenu2").innerText.replaceAll("\t\n" , "");
    console.log("\"" + document.querySelector("#titlename").innerText.split(" ").slice(0 , -1).join(" ") 
 + "\" : " + JSON.stringify(x))
} , 100);
}
setTimeout(() => {
    document.querySelector("#lcbtn > img").click();
    setTimeout(g , 2500);
} , 100);
