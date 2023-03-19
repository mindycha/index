function makeBigger(){
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "4em";
}

function makeFancy(){
    alert("Fancy Shmancy turned on!");
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration= "underline";
}

function makeBoring(){
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration= "none";
}

function makeCaps(){
    const txtArea = document.getElementById("textArea");
    txtArea.value = txtArea.value.toUpperCase();

    let sent = txtArea.value.split(". ");
    for(let i=0; i < sent.length; i++){
        let words = sent[i].split(" ");
        let lst = words.length - 1;
        words[lst] = words[lst] + "-Moo";
        sent[i] = words.join(" ");        
    }
    txtArea.value = sent.join(". ");
}