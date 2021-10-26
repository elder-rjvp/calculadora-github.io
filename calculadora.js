var vp = "";
var vf = "";
var n = "";
var i = "";
var pmt = "";

let btn = document.querySelector('button.btn');
let btnvp = document.querySelector('button.vp');

btnvp.onclick = function(){
    
    let span = document.getElementById('resultado');
    span.innerHTML = "";

    if (vp === "" && vf !== "" && n !== "" && i !== ""){

        vp = vf / (Math.pow((1 + (i/100)), n)) * -1;

        //verifica se o vp e positivo ou negativo, e muda a cor da fonte
       if (vp > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Presente " + vp.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else if (vp === "" && pmt !== "" && n !== "" && i !== ""){

    vp = (((Math.pow(1+(i/100),n) - 1)))/(((i/100)*(Math.pow(1+(i/100), n)))) * pmt;

    //verifica se o vp e positivo ou negativo, e muda a cor da fonte
        if (vp > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Presente " + vp.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else {

        btn.onclick = function(){

            vp = document.querySelector('input[name=entrada]').value;
            console.log(vp);
            return vp;
            
        }
    }

}

let btnvf = document.querySelector('button.vf');

btnvf.onclick = function(){

    let span = document.getElementById('resultado');
    span.innerHTML = "";
    
    if (vf === "" && vp !== "" && n !== "" && i !== ""){
        
        vf = vp * (Math.pow((1 + (i/100)), n)) * -1;

        //verifica se o vf e positivo ou negativo, e muda a cor da fonte
        if (vf > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Futuro  " + vf.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else if (vf === "" && pmt !== "" && n !== "" && i !== ""){

        vf = (((Math.pow(1+(i/100),n) - 1) / (((i/100)))) * pmt)

        if (vf > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Futuro  " + vf.toFixed(2)

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else {

        btn.onclick = function(){

            vf = document.querySelector('input[name=entrada]').value;
            console.log(vf);
            return vf;
            
        }

    }
        

}

let btni = document.querySelector('button.i');

btni.onclick = function(){

    let span = document.getElementById('resultado');
    span.innerHTML = "";
    
    if (i === "" && vp !== "" && n !== "" && vf !== ""){
        
        //verifica qual valor e negativo e converte em positivo
        if (vf < 0){

            vf *= -1

        }else if(vp < 1){

            vp *= -1
        }

        i = ((Math.pow((vf/vp),(1/n))) -1 ) * 100;

        span.style.color = 'black';

        span.innerHTML = (' Taxa de Juros ' + i.toFixed(2) + " % ");

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else {

        btn.onclick = function(){

            i = document.querySelector('input[name=entrada]').value;
            console.log(i);
            return i;
            
        }

    }
        
}

let btnn = document.querySelector('button.n');

btnn.onclick = function(){

    let span = document.getElementById('resultado');
    span.innerHTML = "";
    
    if (n === "" && vp !== "" && vf !== "" && i !== ""){

        //verifica qual valor e negativo e converte em positivo
        if (vf < 0){

            vf *= -1

        }else if(vp < 1){

            vp *= -1
        }
        
        n = (Math.log(vf/vp))/(Math.log(1 + (i/100)));

        span.style.color = 'black';

        span.innerHTML =  " Número de Períodos " + n.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";

    }else {

        btn.onclick = function(){

            n = document.querySelector('input[name=entrada]').value;
            console.log(n);
            return n;
            
        }

    }
        
}

let btnpmt = document.querySelector('button.pmt');

btnpmt.onclick = function(){

    let span = document.getElementById('resultado');
    span.innerHTML = "";

    if (vf === "" && vp !== "" && n !== "" && i !== ""){
       
        pmt = ((((i/100)*(Math.pow(1+(i/100), n))) /((Math.pow(1+(i/100),n) - 1))) * vp) * -1

        if (vp < 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = pmt.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";

   } else  if (vp === "" && vf !== "" && n !== "" && i !== ""){
       
        pmt = ((((i/100))) /((Math.pow(1+(i/100),n) - 1)) * vf) * -1

        if (vf < 0){

            span1.style.color = "green";
        }else {

            span1.style.color = "red";
        }

        span1.innerHTML = pmt.toFixed(2);

        vp = "", vf = "", n = "", i = "", pmt = "";
        

    }else {

        btn.onclick = function(){

            pmt = document.querySelector('input[name=entrada]').value;
            console.log(pmt);
            return pmt;
            
        }

    }
}
