// alert("yoo welcome broo.....")

let display=document.getElementById("display");

function addval(val){
    display.value+=val;

}

function result(){
    try{
        if(display.value===""){
            display.value="enter a value";
        }
        else{
            display.value=eval(display.value);
        }
    } 
    catch(error){
        display.value="sorry bro";
    }
}

function removeval(){
    display.value=display.value.slice(0,-1);
}

function clearing(){
    display.value="";
}