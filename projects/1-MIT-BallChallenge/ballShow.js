// Variables iniciales
var ball = document.getElementById('ball');
var velocityX = 20;
var velocityY = 10;
var positionX = 0;
var positionY = 0;
var moveX = false;
var moveY = false;
var color ="";
var counter = 0;
var limit = 0;
            
// creacion del objeto
var createBall = function(x,y,color,radius){
  // atributos del objeto
  var div = document.createElement('div');
  div.id = 'ball';
  div.style.zIndex = '5';
  div.style.position = 'absolute';    
  div.style.left = x + 'px';    
  div.style.top = y + 'px';    
  div.style.width = '50px';    
  div.style.height = '50px';    
  div.style.borderRadius = radius;
  div.style.background = color; 

  // Colocando todo en el Body
  document.getElementsByTagName('body')[0].appendChild(div);
  limit ++;
  return div,limit;        
}
//función de ocultar bola anterior

//función que cambia atributos css del elemento html"ball"
function moveBall() {
  // coloreando el objeto con colores random
  var r = Math.floor(255*(Math.random()));
  var g = Math.floor(255*(Math.random()));
  var b = Math.floor(255*(Math.random()));        
  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
              
  // Definición de Limites de movimiento con coordenadas X,Y
  const Xmin = 0;
  const Xmax = 300;
  const Ymin = 0;
  const Ymax = 500;
              
  // Movimiento de la Bola en el Eje x y en el Eje Y
  if(positionX <= Xmin || positionX >= Xmax ){ // si la bola alcanza uno de los límites horizontales, la pone en movimiento
    moveX = !moveX;
    // si la bola alcanza un límite horizontal crea una nueva bola
    counter++;
    createBall(positionX,positionY,color,Math.floor(50*(Math.random())).toString() + '%',counter.toString());

  }
  if(positionY <= Ymin || positionY >= Ymax ){ // si la bola alcanza uno de los límites verticales, la pone en movimiento
    moveY = !moveY;
  }
  if (moveX){ // la bola se mueve a la derecha
    positionX = positionX + velocityX;
    ball.style.left = positionX+'px';
  }else{ // la bola se mueve a la izquierda
    positionX = positionX - velocityX;
    ball.style.left = positionX+'px';
  }
  if (moveY){ // la bola se mueve hacia abajo
    positionY = positionY + velocityY;
    ball.style.top = positionY+'px';
  }else{ // la bola se mueve hacia arriba
    positionY = positionY - velocityY;
    ball.style.top = positionY+'px';
  }
  // Esta llamada detiene el script y oculta el objeto principal
  if (limit == 110){
    clearInterval(ejecutar);
    ball.style.display = 'none';
  }
}


// Esta llamada mueve la bola cada 100ms
  const ejecutar = setInterval(moveBall, 60);


