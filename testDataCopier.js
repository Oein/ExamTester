let ln = {"kor":"" , "eng":""}

document.querySelector("#startbtn").click(); document.querySelector("#lcbtn").click(); function copyToClipboard(val) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}
setTimeout(() => {
    ln["eng"] = document.querySelector("#ultramenu2").innerText.replaceAll("\"" , "'").replaceAll("\n\t\n" , "\n").replaceAll("\t\n" , "");
    document.querySelector("#multi4").click();
    setTimeout(() => {
        ln["kor"] = document.querySelector("#ultramenu2").innerText.replaceAll("\"" , "'").replaceAll("\n\t\n" , "\n").replaceAll("\t\n" , "");
    let inT = document.querySelector("#titlename").innerText.split(" ");

    console.log("\"" + inT.slice(0 , inT.length - 1).join(" ") + "\" : " + JSON.stringify(ln));
    } , 100)
} , 1700)
