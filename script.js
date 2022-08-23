let i = 0;
let cd;
let len;

function xmldocload() {

    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        xmlDoc = xhttp.responseXML;
        cd = xmlDoc.getElementsByTagName("CD");
        len = cd.length;
        display(i);
    }
    xhttp.open("GET", "cd_catalogue.xml");
    xhttp.send();

}

document.getElementById('btn1').addEventListener('click', previous);
document.getElementById('btn2').addEventListener('click', next);

function previous() {
    if (i > 0) {
        i--;
        display(i);
    }
}
function next() {
    if (i < len) {
        i++;
        display(i);
    }
}

function display(i) {

    let para = "";
    para = "ARTIST:" + cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "<br>" +
        "TITLE:" + cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "<br>" +
        "YEAR:" + cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "<br>";

    document.getElementById("demo").innerHTML = para;

}

xmldocload();