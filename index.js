function newTweet(){
    let li = document.createElement("li");
    li.className="twit";
    let inputValue = document.getElementById("input").value;
    var txt = document.createTextNode(inputValue);

    li.appendChild(txt);
    
    if(inputValue === ""){
        alert("You must write something");
    }else{
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("input").value="";
}