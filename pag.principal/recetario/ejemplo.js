let discografia=[
    {
        nombre:"Mini Soufflé Omelette",
        anio:"Media",
        canciones:["Clara de huevo (batidas a nieve)","Yema de huevo","Crema espesa (huevo batido)","Pimienta","Sal","Perejil","tomate"]
    },
    {
        nombre :"Huevos Benedict",
        anio:"dificil",
        canciones:[
            "Huevo",
            "Chuleta",
            "Salsa Holandesa",
            "Polvo de Karasumi",
            "Muffin",
            "Queso"
        ]
    }
]
function buscar(){
    const name = document.getElementById('nombre').value;
    let  nombre;
    let  año;
    let  canciones;
    for ( let i = 0; i < discografia.length; i++){
        if(discografia[i].nombre == name){
            nombre = discografia[i].nombre;
            año = discografia[i].anio;
            canciones = discografia[i].canciones; //;
            break;
        }
    }
    document.getElementById('title').innerText= "Receta "+nombre; 
    document.getElementById('año').innerText= "Dificultad "+año; 
    //mostrando los ingredientes
    const lista  = document.getElementById('canciones');
    const ul = document.createElement('ul');
    for (let i = 0; i < canciones.length; i++) {
        const li = document.createElement('li');
        li.textContent = canciones[i]; 
        ul.appendChild(li); 
    } 
    lista.appendChild(ul);
}
/**
 * validacion de entra de busqueda -(Indistinto Mayus minus y espacio)
 * validacion si existe el nombre de receta buscar
 * solucionar todos los incovenientes que puedan tener al testear la funcionalidad()
*/