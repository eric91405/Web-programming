let count =0;
let timerID=null;

onmessage =function(e){
    if(e.data=="start"){
        timerID=null;
        if(timerID !=null)
            return;
        timerID=setInterval(mycallback, 1000);
    }
    else if(e.data=="stop"){
        if(timerID ==null)
            return;
        clearInterval(timerID);
        //close();
    }
}

function mycallback(){
    count++;
    postMessage(count);
}