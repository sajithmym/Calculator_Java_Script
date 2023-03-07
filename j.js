function Type(omg){
    document.getElementById("inp").value += omg
}

function clean(){
    document.getElementById("inp").value = ""
}

function Done(){
    try{

        var Get = document.getElementById("inp").value
        var answer = eval(Get)
        document.getElementById("inp").value = answer
        
    }catch(e){

        alert("Invaid Entry Check and Try Again...")
    }
}

