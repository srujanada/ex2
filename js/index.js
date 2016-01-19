window.onload = function () {
    //check that js is working
    console.log("reading js");
    
    //capture the submit event
    document.inputForm.onsubmit = processForm;
    
    document.inputForm.onreset = resetPage;
    
    function processForm() {
        
        //stores noun one in a variable
        var nounOne = document.inputForm.nounOne.value;
        
        //stores noun two in a variable
        var nounTwo = document.inputForm.nounTwo.value;
        
        //stores three in a variable
        var three = document.inputForm.three.value;
        
        //stores four in a variable
        var four = document.inputForm.four.value;
        
        //stores five in a variable
        var five = document.inputForm.five.value;
        
        //error detection
        if (nounOne === "" || nounTwo === "") {
            alert("Please fill in all the blanks to proceeed.");
        } else {
            var myMsg = document.getElementById("myMsg");
            myMsg.innerHTML = "You've been zombified! And you have exactly <em>" + nounOne + "</em> minutes to make it out of this warehouse full of humans with <em>" + nounTwo + "</em>. As you make your way through the first door, you notice a lone <em>" + three + "</em> lying in the corner. You pick it up and brandish it like a <em>" + four + "</em>. You're feeling quite confident about yourself, as well as one other strange feeling you can't quite place ... <em>" + five + "</em>, perhaps? You push forward, and past the second door, you encounter a horde of your own kind. At last! You should be safe here. Shuffling forward, you reach out to one of them and rejoin the ranks of the undead.";
            myMsg.className = "show";
        }
        
        //prevent page from reloading
        return false;
    }
    
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the input fields
        nounOne.value = "";
        nounTwo.value = "";
        three.value = "";
        four.value = "";
        five.value = "";
        
        return false;
    }

}