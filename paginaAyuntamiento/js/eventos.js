window.addEventListener("DOMContentLoaded",function(e) {
    mostrarEventos();
    });

    function mostrarEventos(){
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
        var myObj=JSON.parse(this.responseText);
        console.log(myObj);
        pintarEventos(myObj);
    }
};
xmlhttp.open("GET","../JSON/eventos.json",true);
xmlhttp.send();
}

function pintarEventos(eventos){
    let tablaEventos=document.getElementById("tablaEventos");
    tablaEventos.innerHTML= "";
    eventos.forEach(evento => {
        console.log(evento.nombre);

        tablaEventos.innerHTML+=
        `
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>${evento.dia} ${evento.hora} ${evento.nombre}</td>
          <td> 2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
        </tr>
        <tr>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
        </tr>
        <tr>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td></td>
          <td></td>
        </tr>
        `
        ;
    
    });
    
}
