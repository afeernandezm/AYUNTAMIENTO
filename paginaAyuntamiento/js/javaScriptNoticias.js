window.addEventListener("DOMContentLoaded",function(e) {
    mostrarFooter();
    });

    function mostrarFooter(){
        const fecha = new Date();
        let footer={
           nombre:'Ayuntamiento de Écija'
        }
        let piePagina=document.getElementById("fecha");
        piePagina.innerText=footer.nombre+"-"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    }