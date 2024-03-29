# SOFTWARE DEVELOPMENT - SOLVO/VMC

## ¿Qué hace este código JS?🚀

Este es un código propio del lenguaje JavaScript, un lenguaje orientado principalmente al desarrollo web. En este caso, nos encontramos frente un código que inicialmente declara mediante una variable constante un arreglo o matriz de objetos llamado "namelist" en donde cada objeto contiene una propiedad "name" y "lastname", estas propiedades tienen un dato de tipo string asignado previamente, dichos datos hacen referencia al nombre y apellido de una persona. Posterior, se crea mediante otra constante un arreglo llamado "fullnames" que contentrá los nombres completos, combinando el nombre y el apellido de cada persona en "namelist", en este caso inicia vacía. 
Luego, se calcula la longitud de la matriz "namelist" (es decir, cuántos elementos tiene "namelist") y guarda ese valor en una variable llamada "size". Esta variable también es declarada como constante y utiliza la función length para realizar la anterior tarea.
En resumen a lo anterior, "fullnames" se inicializa como una matriz vacía, y "size" se inicializa con la longitud (número de elementos) de la matriz "namelist".

Finalmente nos encontramos con un bucle For para iterar a través de cada elemento en la matriz "namelist". 
* Este bloque For se inicia con i = 0 con la condición de que i < size lo cual significa que el bucle continuará mientras i sea menor que el valor almacenado en la variable size (esta condición indica si el bucle continua ejecutandose o no). Y, i++ después de cada iteración del bucle, se incrementa el valor de i en 1. Esto asegura que en cada iteración, i se incremente para avanzar al siguiente elemento de la matriz "namelist".
* let element ${namelist[i].name} ${namelist[i].lastname};en cada iteración del bucle, se crea una cadena llamada "element" que contiene el nombre y el apellido de la persona actual en la iteración. Se hace posible acceder al nombre y al apellido utilizando la notación de puntos (namelist[i].name y namelist[i].lastname), es decir acceder a las propiedades de los objetos. (El simbolo $,sirve para concatenar variables)
* fullnames.push(element);la cadena "element" se agrega a la matriz "fullnames" utilizando el método push(). Esto significa que después de cada iteración del bucle, el nombre completo de la persona actual se agrega a la matriz "fullnames".

Por último, con la función Console.log() propia de JS, se imprime en la cosola el nombre completo de las personas pasandole el arreglo "fullnames" que los nombres completos generada previamente en el código

**PASO A PASO** 👓🛫

**1.**
Definimos una matriz llamada "namelist" que contiene objetos con las propiedades "name" (nombre) y "lastname" (apellido) de 5 personas.

**2.**
Creamos una matriz vacía llamada "fullnames" que se utilizará para almacenar los nombres completos.

**3.**
La variable "size" se inicializa con la longitud de la matriz "namelist".

**4.**
Utilizamos un bucle For para iterar a través de cada elemento en la matriz "namelist".

**5.**
Dentro del bucle, creamos una cadena llamada "element" que contiene el nombre completo combinando el nombre y el apellido del elemento actual en la iteración.

**6.**
La cadena "element" se agrega a la matriz "fullnames" utilizando el método push.

**7.**
Una vez completado el bucle, se imprime la matriz "fullnames" en la consola.

En resumen, este código toma una lista de nombres y apellidos, crea una nueva lista de nombres completos y luego imprime esa lista en la consola. El resultado en la consola sería una lista de nombres completos como "Violet Cannon", "Nancy Rice", etc.


## Una solución diferente... ✍️

En el archivo prueba.js encontramos entonces una solución diferente a la ya propuesta. 

**¿Qué se hizo en esta solución planteada?**

**1.**
**Definimos el arreglo "namelist":** Acá estamos creando en una constante una matriz con todos los objetos presentados en "namelist". Cada uno de estos objetos representan en nuestro programa una persona con las propiedades "name" y "lastname", que hacen referencia al nombre y apellido de cada uno.

**2.**
**Declaramos un arreglo llamado "fullnames":** En este caso lo estamos declarando vacío para más adelante almacenar en este arreglo los nombres completos de las personas ("name" y "lastname").

**3.**
**Usamos el método ForEach():** En este caso llamamos a nuestro "namelist" y utilizamos el método ForEach(). Este método itera sobre cada elemento de nuestro arreglo "namelist" (en cada caso particular (objeto 'Person')).Esta función toma el objeto 'Person', concatena las propiedades "name" y "lastname" para formar el nombre completo de la persona ("fullname") y luego agrega este nombre completo al arreglo "fullnames" usando push().

**4.**
**Impresión de Fullnames en consola:** Finalmente, imprimimos el arreglo "fullnames" en la consola para mostrar los nombres completos de todas las personas en "namelist".

En resumen, este código recorre cada objeto en "namelist", crea un nombre completo para cada persona y los almacena en un nuevo arreglo llamado "fullnames", que luego se imprime en la consola. En este caso usé ForEach() ya que logra simplificar el proceso de iteración haciendo que código sea más legible y ágil.

NOTA: En el archivo prueba1.js encontramos una solución diferente, con entrada de datos por consola.









