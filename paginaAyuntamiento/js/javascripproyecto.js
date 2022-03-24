window.addEventListener("DOMContentLoaded",function(e) {
    mostrarSaludo();
    mostrarFotoAlcalde();
    mostrarFooter();
    });

function mostrarSaludo(){
    let alcalde={
        saludo:'Hola, soy el alcalde de Écija, un placer que uses esta página.',
        nombre:'Nombre: David Javier García Ostos',
        edad:'Edad: '+57,
        email:'email: davidjgarciaostos@gmail.com'
        }
       let  nombreAlcalde=document.getElementById("nombreAlcalde");
       console.log(nombreAlcalde);

       nombreAlcalde.innerText=alcalde.saludo+"\n\n"+alcalde.nombre
       + "\n\n"+alcalde.edad+"\n\n"+alcalde.email;
      
}

 
function mostrarFotoAlcalde(){
    let imagen={
        img:'https://elcorreoweb.es/binrepository/675x402/0c1/675d400/none/10703/QIRC/2017-08-02-alcalde-entrevista_20300079_20191115091608.jpg'
    }
        let imagenAlcalde=document.getElementById("imagenAlcalde");
        imagenAlcalde.setAttribute("src",imagen.img);
        
}

function mostrarFooter(){
    const fecha = new Date();
    let footer={
       nombre:'Ayuntamiento de Écija'
    }
    let piePagina=document.getElementById("fecha");
    piePagina.innerText=footer.nombre+"-"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
}
