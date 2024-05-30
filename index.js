const gender=document.querySelector('#gender')
const select=document.querySelector('#select')
const name=document.querySelector('#name')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const mobile=document.querySelector('#mobile')
const sport=document.querySelector('#Sport')
const count=document.querySelector('.count')
const confirm_=document.querySelector('#c_password')

//gender.value=select.value
//console.log(select.value)
var sum=0;
function to_do(){
    error=0;
    console.log(name.value)
    console.log(email.value)
    console.log(password.value)
    console.log(mobile.value)
    console.log(gender.value)
    console.log(sport.value)
    console.log(name.value.length)
    for(let i=0;i<name.value.length;i++){
        code=name.value.charCodeAt(i);
        if((code>47 && code<58) ){
            alert('!!Invalid Name')
            error++;
        }
        

    
    }
    for(let i=0;i<mobile.value.length;i++){
        code=mobile.value.charCodeAt(i);
        if((!(code>47 && code<58))){
            alert('!!Invalid Mobile number')
            error++;
        }
    }
   
    
   
        if((mobile.value.length!=10)){
            
            alert('!!Inccorect Mobile Number')
            error++;
        }
    
    if((password.value.length<8)){
        alert('Re-enter password!!')
        error++;
    }
    if((confirm_.value!=password.value)){
        alert('Confirm password not equal to password!!')
        error++;
    }
    

    

    if(sport.value=='other'){
        alert('Enter name of sport!');
        sport.value='';
        error++;
        
    }
    else{
        name.value='';
        gender.value='';
        email.value='';
        sport.value='';
        confirm_.value='';
        mobile.value='';
        password.value='';
    }
    if(error==0){
        sum++;
        count.innerHTML=sum;
    }
}
    
     

