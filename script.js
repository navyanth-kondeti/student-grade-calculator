
const Getmarks=()=>{
    let maths=Number(document.getElementById('math').value);
    let Cth=Number(document.getElementById('Ctheory').value);
    let Cprac=Number(document.getElementById('Cpractical').value);
    let FOit=Number(document.getElementById('FOIT').value);
    let Upct=Number(document.getElementById('pcandtroubleshoot').value);    
    let marksobtained=maths+Cth+Cprac+FOit+Upct;
    let totalmarks=500;
    let Percentage=(marksobtained/totalmarks)*100;
    document.getElementById('Percentage').innerHTML=Percentage +"%"
    if(Percentage<100 && Percentage>90){
        grade='A++';
    }else if(Percentage<90 && Percentage>75){
        grade='A';
    }else if(Percentage<75 && Percentage>60){
        grade='B';
    }else if(Percentage<60 && Percentage>45){
        grade='C';
    }else if(Percentage<=45 && Percentage>=35){
        grade='D';

    }else{grade='F'};
    document.getElementById("Grade").innerHTML=grade;
    if(Percentage>35){
        document.getElementById("passed").innerHTML="Congratulations you got passed!";}
    else if(maths<35){
        document.getElementById("passed").innerHTML="Sorry you got failed!";
    }
    else if( Cth<35){
        document.getElementById("passed").innerHTML="Sorry you got failed!";
    }

    else if(FOit<35){
        document.getElementById("passed").innerHTML="Sorry you got failed!";
    }
    else if(Cprac<35){
        document.getElementById("passed").innerHTML="Sorry you got failed!";
    }
    else if(Upct<35){
        document.getElementById("passed").innerHTML="Sorry you got failed!";
    }
    else{
    document.getElementById("passed").innerHTML="Sorry you got failed!";};    

}
