window.onload = ()=>{

    var cdg = document.getElementById('cdg');
    var ddd = document.getElementById('ddd');
    var num = document.getElementById('num');
    var messageText = document.getElementById('messageText');

}


function message(){

    cdgS = cdg.value;
    dddS = ddd.value;
    numS = num.value;
    messageS = messageText.value;

    cdgS = cdgS.replace(/\s/g, '');
    dddS = dddS.replace(/\s/g, '');
    numS = numS.replace(/\s/g, '');
    messageS = messageS.replace(/\s/g, "%20");


    var numFinal = "https://api.whatsapp.com/send?phone=seunumerodetelefone="+cdgS+dddS+numS+"&text="+messageS;
    console.log(numFinal);
    
    window.open(numFinal);

}