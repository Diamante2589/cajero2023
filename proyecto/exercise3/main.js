/*
let sex=prompt("Si es Hombre escriba H si es mujer M");
let climate=prompt("Se encuentra en tierra fria o tierra caliente");
let ubication=prompt("Se encuentra en la ciudad o en la playa");
let work=prompt("Se encuentra plan de trabajo o vacaciones");
let  forrest=prompt("Se encuentra cerca a la ciudad o lejos");


    if (sex=="H" && climate=="fria" && ubication =="ciudad" && work=="trabajo" && forrest=="ciudad"){
       document.write(`El hombre usa traje`);
       document.write("<img src= 'img/img1.png'>");

    }else if(sex=="H" &&climate=="caliente" && location =="ciudad" && work=="trabajo" && forrest=="ciudad"){
    
    } else if(sex=="H" &&climate=="caliente" && location =="playa" && work=="trabajo" && forrest=="ciudad"){
    
    }else if(sex=="H" &&climate=="caliente" && location =="playa" && work=="vacaciones" && forrest=="ciudad"){
         
    }else if(sex=="H" &&climate=="caliente" && location =="playa" && work=="vacaciones" && forrest=="lejos"){
        
    };

    document.write("ya termino el ejercicio");


    //document.write("<img src='img/camisa.png'>")

*/

/*
function saludar (yourName){
   const mensaje= `hello mi name ${yourName} mi nombre es NESTOR`;
   console.log(mensaje);
   alert(mensaje);

};
     saludar("nestor");
     */
/*
     const friends= ['rachel' , 'nestor', 'luis'];

     document.write(`${friends[0]}`);
*/
/*
     for(x  of friends){
       document.write(`${x} <br>`);
     }
     */
/*
     for(x=0; x<friends.length; x++){
      document.write(`${friends[x]} <br>`);
    }

    */
/*
    const yaxche={
       firstName:"Yasche",
       lastName: "Manrique",
       age: 2023-1993,
       job:"sensei",
       friends:["rachel", "Monica", "Chandler","joey"]

    }
    console.log(`${yaxche.firstName} tiene ${yaxche.friends.length} amigos, y su mejor amiga es ${yaxche.friends[2]}`);

*/

/*
const yaxche={
   firstName:"Yasche",
   lastName: "Manrique",
   age: 0,
   birthYear:1993,
   job:"sensei",
   friends:["rachel", "Monica", "Chandler","joey"],

   calAge:function(){
      yaxche.age=2023-birthYaer;
   }


}
console.log(`${calAge}`);

*/
// tablas de multiplicar
/*let numero=12;
let x=1;

while(x< 10){
   console.log(`${numero} x  ${x} = ${numero * x}`);
   x++
}
*/
//variables
/*
const theList=document.getElementById("theList");
const btn=document.getElementById("theBtn");
//control de elmentos del boton se añade un nuevo  li , se personaliza ese elemento y se coloca +1 como n
//que es el numero de elementos a adicionar.


btn.addEventListener("click",function(){
  
   const li = document.createElement('li')
   li.textContent='element'+ (theList.children.length + 1);
   theList.appendChild(li);
   //console.log(li);
});

//Al dar click en el elemnto se coloca en rojo

theList.addEventListener('click', function(e){
   if(e.target.tagName.toLowerCase() === 'li'){
      e.target.style.color="red";

   }
});

//Al dar dobleclick en el elemento se borra

theList.addEventListener('dblclick', function(e){
   if(e.target.tagName.toLowerCase() === 'li'){
      theList.removeChild(event.target)
      
   }
});



*/
//creamos las variables
const theList=document.getElementById('theList');
const theBtn=document.getElementById('theBtn')

//creamos un evento boton el cual va a permitir agregar los elementos al ul

theBtn.addEventListener('click', function(){
   const li=document.createElement('li');//crear el elemento li
   li.textContent='Element'+(theList.children.length+1);
   theList.appendChild(li);
   console.log(li);
})

//ahora vamos a colorear la lista con click de rojo

theList.addEventListener('click', function(e){

   if(e.target.tagName.toLowerCase()=== 'li'){
      e.target.style.color='red';
      
   }
})




//por ultimo a eliminar la lista con dobleclick

theList.addEventListener('dblclick', function(e){

   if(e.target.tagName.toLowerCase()=== 'li'){
      theList.removeChild(e.target);
      
   }
})
