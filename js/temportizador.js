/* Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
 */

let tiempo;
let tiempoDescuento = 0

const iniciar = () =>{
  //console.log('usamos el boton')
 let valorTiempo = document.getElementById('valorTiempo').value;
  if(valorTiempo && valorTiempo > 0){
   tiempoDescuento = parseInt(valorTiempo);
   tiempo = setInterval(actualizartiempo,1000)
   //console.log(tiempo)
  } else {
    alert('ingrese un tiempo valido')
  }
  
  }
  
const pausar = ()=>{
  clearInterval(tiempo)
}

const resetear = () =>{
  clearInterval(tiempo)
  tiempoDescuento = 0;
  document.getElementById('valorTiempo').value = '';
  document.getElementById('tiempo').innerText = '00:00:00';
}
  
const actualizartiempo = () =>{
  if(tiempoDescuento){
    tiempoDescuento--;
    const horas = Math.floor(tiempoDescuento / 3600);
    console.log(horas,minutos,segundos)
        const minutos = Math.floor((tiempoDescuento % 3600) / 60);
        
        const segundos = tiempoDescuento % 60;
        const mostrarTiempo = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        document.getElementById('tiempo').innerText = mostrarTiempo;
  } else {
    clearInterval(tiempo)
  }
}



