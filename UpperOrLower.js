let element = document.getElementById('input');

function toUpper() {
    document.getElementById('input').value = element.value.toUpperCase();
}

function toLower() {
    document.getElementById('input').value = element.value.toLowerCase();
}

function toProper() {
    let val = element.value.toLowerCase();
    let sentences = val.split(" ");
    for(let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    let result = sentences.join(" ")
    document.getElementById('input').value = result;
}
function toSentence() {
    let val = element.value.toLowerCase();
    let sentences = val.split(".");
    for(let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    let result = sentences.join('. ');
    document.getElementById('input').value = result.trim();
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

document.getElementById('upper-case').addEventListener("click", toUpper);
document.getElementById('lower-case').addEventListener("click", toLower);
document.getElementById('proper-case').addEventListener("click", toProper);
document.getElementById('sentence-case').addEventListener("click", toSentence);
document.getElementById('save-text-file').addEventListener("click", function (){
    let text = element.value;
    let filename = "text.txt";
    download(filename, text);
}, false);