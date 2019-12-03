# Clase 05

## Iframe
La etiqueta **iframe** representa un contexto de navegación anidada, el cual permite incorporar otra página HTML en la página actual.
Permite insertar contenido de dominios externos o subdominios.

````````
<iframe src="rutadelcontenido" frameborder="0" scrolling="no">
````````


## Video
El elemento video se utiliza para incrustar vídeos en un documento HTML

* **autoplay**: Un atributo booleano; si se especifica, el video comenzará a reproducirse automáticamente tan pronto como sea posible, sin detenerse para terminar de cargar los datos.
* **controls**: Si está presente este atributo, Gecko ofrecerá controles para permitir que el usuario controle la reproducción de video, incluyendo volumen, búsqueda y pausar/reanudar reproducción.
* **loop**: Un atributo booleano; si se especifica, al alcanzar el final del video, buscaremos automáticamente hasta el principio.
* **poster**: Una URL que indica un marco de póster para mostrar el resultado hasta que el usuario reproduzca o busque. Si este atributo no se especifica, no se muestra nada hasta que el primer cuadro está disponible, entonces se muestra el primer marco como el marco de póster.
* **src**: La URL del vídeo que se va a insertar. podrás optar, en su lugar, por el elemento **source** dentro del bloque de vídeo para especificar el video que se va a incrustar.

````````
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Tu navegador no admite el elemento.
</video>

<video autoplay poster="posterimage.jpg">
   <source src="videofile.ogg" type="video/ogg">
   <source src="videofile.mp3" type="video/mp3">
</video>



````````
## Audio

El elemento audio se usa para insertar contenido de audio en un documento HTML

* **autoplay**:Un atributo booleano; si se especifica 
, el sonido comenzará a reproducirse automáticamente en cuanto sea posible, sin detenerse para terminar de cargar los datos.
* **controls**: Si está presente este atributo, el navegador ofrecerá controles para permitir que el usuario controle la reproducción de audio, incluyendo volumen, búsqueda y pausar/reanudar reproducción.
* **src**: La URL del audio que se va a insertar; en su lugar puedes usar el elemento source dentro del bloque de audio para especificar el audio que se va a insertar.

````````
<audio src="ruta_archivo.ogg"
       autoplay>
    		El navegador no soporte la etiqueta audio

</audio>


<audio autoplay>
        <source src="ruta_archivo.mp3" type="audio/mp3">
 		<source src="ruta_archivo.ogg" type="audio/ogg">
  		El navegador no soporte la etiqueta audio

</audio>


````````