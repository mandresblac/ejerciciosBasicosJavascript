/* Ejercicio final: construir una máquina registradora
Construyamos una máquina registradora que pueda agregar artículos a un carrito de compras, calcular el precio total, calcular descuentos y aceptar pagos en efectivo.

La moneda se asume en USD, por lo que no es necesario agregarla al programa.

La caja registradora tiene 3 artículos a la venta:

Teléfono por 300
Televisor inteligente por 220
Consola de juegos por 150
Hay un 10% de descuento cuando el precio total es superior a 400.

La caja registradora debe tener un carrito de compras que comience vacío.

La caja registradora debe proporcionar un método llamado addItemque toma el nombre de un artículo como parámetro. Cuando lo llamen, deberá verificar si el artículo está disponible para la venta. Si es así, el artículo deberá agregarse al carrito de compras. Si no está disponible, muestra un mensaje diciendo que no vendemos ese artículo.

La caja registradora debe proporcionar un método llamado calculateTotalPriceque calcula el precio total de todos los artículos del carrito de compras. Debería recorrer los artículos del carrito de compras y resumir sus precios.

La caja registradora debe proporcionar un método llamado payque toma el monto del pago como parámetro.

Se debe calcular el precio total de los artículos del carrito de compras utilizando el calculateTotalPricemétodo. Si el precio total es superior a 400 se deberá aplicar un descuento del 10%.

Luego, el método debe comparar el monto del pago con el precio total (después de aplicar el descuento) y mostrar un mensaje apropiado:

Si el monto del pago es igual o mayor que el precio total, deberá mostrar un mensaje agradeciendo al cliente por la compra. Si hay algún cambio, también debe mostrar la cantidad de cambio que se dará.
Si el monto del pago es menor que el precio total, debería mostrar un mensaje indicando que el cliente no tiene suficiente dinero para comprar los artículos.
El programa debe incluir console.log()declaraciones apropiadas para mostrar mensajes para agregar artículos al carrito de compras, mostrar el precio total y procesar el pago.
El programa debe manejar escenarios en los que el monto del pago del cliente es exactamente igual al precio total, así como casos en los que el monto del pago es mayor o menor que el precio total.

Para crear el programa, necesita utilizar lo que ha aprendido sobre objetos, matrices, condicionales y bucles.

Le recomiendo que primero intente crear el programa usted mismo. Si te quedas atascado, consulta la solución proporcionada a continuación. ¡Buena suerte!


URL pagina web de consulta: 
https://www.freecodecamp.org/news/learn-javascript-for-beginners/?fbclid=IwAR0YSraxDdJCDo3LhFWP1T1X52zr99Ruyt4PWlINAPnr3N3RIbCO48RAqbs#howtoinstallnodejs
*/
