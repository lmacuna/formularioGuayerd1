const formulario =document.querySelector("#formulario")
let datos=[];

const mensaje=(e)=>{
    campo1= document.querySelector("#formulario #primero").value
    campo2= document.querySelector("#formulario #segundo").value
    campo3= document.querySelector("#formulario #tercero").value
    campo4= document.querySelector("#formulario #cuarto").value
    /* for(let i=0;i<campos.length;i++){
        console.log(campos[i])
    } */
    console.log(campo1.length)
    console.log(campo1,campo2,campo3,campo4)
    
   
    
    if(campo1.length===0 || campo2.length===0||campo3.length===0||campo4.length===0){
        //alert("alguno de los campos esta vacio") 
        document.querySelector("#mensaje").innerHTML='<label style="color:red">'+"alguno de los campos esta vacio"+'</label>'
        if(campo1.length===0){
            document.querySelector("#primero").classList.replace("bordeblanco","borderojo")
            
        }else if(campo2.length===0){
            document.querySelector("#segundo").classList.replace("bordeblanco","borderojo")
            
        }else if(campo3.length===0){
            document.querySelector("#tercero").classList.replace("bordeblanco","borderojo")
           
        }else if(campo4.length===0){
            document.querySelector("#cuarto").classList.replace("bordeblanco","borderojo")
        } 
            
        
        
       // e.preventDefault()
           
    }else if(campo1!==null&&campo2!==null&&campo3!==null&&campo4!==null) { 
        Swal.fire({title:'<span style="color:#fff;border-radius:8px">Enviando mensaje"</span>',icon:"success",grow:"fullscreen",background:"blue",timer:3000,timerProgressBar:true});
        enviado() 
       // alert("Enviado")
        
       
       localStorage.setItem("nombre",campo1)
       localStorage.setItem("edad",campo2)
       localStorage.setItem("telefono",campo3)
       localStorage.setItem("Email",campo4) 
       datos.push(campo1+" ")
       datos.push(campo2+" ")
       datos.push(campo3+" ")
       datos.push(campo4+" ")
        console.log(datos)
        for(let i=0;i<datos.length;i++){
            console.log(datos[i])
        }
       document.querySelector("#formulario #primero").value="";
       document.querySelector("#formulario #segundo").value="";
       document.querySelector("#formulario #tercero").value="";
       document.querySelector("#formulario #cuarto").value="";
       
      restablecer2()
      
       
    }
   
   
}


//formulario.addEventListener("submit",mensaje)     


let primero=document.querySelector("#primero")
primero.addEventListener('blur',cambio,true)
primero.addEventListener('focus', cambiar,true);
primero.addEventListener('keypress',bordes1,true)


let segundo=document.querySelector("#segundo")
segundo.addEventListener('blur',cambio2,true)
segundo.addEventListener('focus', cambiar2,true);
segundo.addEventListener('keypress',bordes2,true)

let tercero = document.querySelector("#tercero")
tercero.addEventListener('blur',cambio3,true)
tercero.addEventListener('focus',cambiar3,true)
tercero.addEventListener('keypress',bordes3,true)

let cuarto = document.querySelector("#cuarto")
cuarto.addEventListener('blur',cambio4,true)
cuarto.addEventListener('focus',cambiar4,true)
cuarto.addEventListener('keypress',bordes4,true)



function cambiar(){
    
    document.querySelector("#primero").style.backgroundColor="lightgreen";
   
}

function cambio(){
    document.querySelector("#primero").style.backgroundColor=""
}
function bordes1(){
   
    document.querySelector("#primero").classList.replace("borderojo","bordeverde")
    document.querySelector("#primero").classList.replace("bordeblanco","bordeverde")
    document.querySelector("#mensaje").innerHTML='<p style="color:green">'+"Nombre completo"+'</p>'
    
}






function cambiar2(){
    
    document.querySelector("#segundo").style.backgroundColor="lightgreen";

}

function cambio2(){
    document.querySelector("#segundo").style.backgroundColor=""
}
function bordes2(){
    
    document.querySelector("#segundo").classList.replace("borderojo","bordeverde")
    document.querySelector("#segundo").classList.replace("bordeblanco","bordeverde")
    document.querySelector("#mensaje").innerHTML='<p style="color:green">'+"Edad completo"+'</p>'
 
    
}








function cambiar3(){
    
    document.querySelector("#tercero").style.backgroundColor="lightgreen";

}

function cambio3(){
    document.querySelector("#tercero").style.backgroundColor=""
}
function bordes3(){
    
    document.querySelector("#tercero").classList.replace("borderojo","bordeverde")
    document.querySelector("#tercero").classList.replace("bordeblanco","bordeverde")
    document.querySelector("#mensaje").innerHTML='<p style="color:green">'+"Telefono completo"+'</p>'
    
    
}



function cambiar4(){
    
    document.querySelector("#cuarto").style.backgroundColor="lightgreen";

}

function cambio4(){
    document.querySelector("#cuarto").style.backgroundColor=""
}
function bordes4(){
    
    document.querySelector("#cuarto").classList.replace("borderojo","bordeverde")
    document.querySelector("#cuarto").classList.replace("bordeblanco","bordeverde")
    document.querySelector("#mensaje").innerHTML='<p style="color:green">'+"E-mail completo"+'</p>'
    
    
}







const recuperar=()=>{
    nombre=localStorage.getItem("nombre")
    edad =localStorage.getItem("edad")
    telefono =localStorage.getItem("telefono")
    Email=localStorage.getItem("Email")
    if(localStorage.getItem("nombre")===null){
       document.querySelector("#info").innerHTML='<p>'+"Sin Info"+'</p>'  
       setTimeout(function(){  document.querySelector("#info").innerHTML=""; }, 3000);   
    }else{
    document.querySelector("#info").innerHTML='<p style="margin:15px !important">'+`Nombre: ${nombre}\nEdad: ${edad}\nTelefono: ${telefono}\nE-mail: ${Email}`+'</p>'
    }
}
const borrar=()=>{
    if(localStorage.getItem("nombre")!==null){
    localStorage.removeItem("nombre")
    localStorage.removeItem("edad")
    localStorage.removeItem("telefono")
    localStorage.removeItem("Email")

    document.querySelector("#info").innerHTML='<p>'+"Item borrado"+'</p>'
   
    }
        
    setTimeout(function(){  document.querySelector("#info").innerHTML=""; }, 3000);
}
const restablecer =()=>{
    document.querySelector("#info").innerHTML=""
}
const restablecer1=()=>{
    document.querySelector("#primero").classList.replace("borderojo","bordeblanco")
    document.querySelector("#primero").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#segundo").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#segundo").classList.replace("borderojo","bordeblanco")
    document.querySelector("#tercero").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#tercero").classList.replace("borderojo","bordeblanco")
    document.querySelector("#cuarto").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#cuarto").classList.replace("borderojo","bordeblanco")

    document.querySelector("#mensaje").innerHTML=""
}
const enviado=()=>{
    
    document.querySelector("#mensaje").innerHTML='<p style="color:darkblue;font-weight:bold;font-size:25px">'+"Mensaje Enviado"+'</p>' 
    setTimeout(function(){  document.querySelector("#mensaje").innerHTML=""; }, 5000);
    
  // alert("Enviado")
     
  
}
const restablecer2=()=>{
    document.querySelector("#primero").classList.replace("borderojo","bordeblanco")
    document.querySelector("#primero").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#segundo").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#segundo").classList.replace("borderojo","bordeblanco")
    document.querySelector("#tercero").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#tercero").classList.replace("borderojo","bordeblanco")
    document.querySelector("#cuarto").classList.replace("bordeverde","bordeblanco")
    document.querySelector("#cuarto").classList.replace("borderojo","bordeblanco")

}


