let cajon = parseInt(prompt('Elegir el cajón abierto (1-4): '));

switch (cajon){
    case 1:
          alert ('Contiene varias herramientas de dibujo: papel, lápices, etc. ');
          break;
    case 2:
          alert ('Contenido hardware: cables, componentes, etc. ');
          break;
    case 3:
          alert ('¿Ah, el cajón está cerrado malo?');
          break;
    case 4:
          alert ('Contiene ropa: camisas, pantalones, etc. ');
          break;
    default:
          alert ("La noticia del día: el gabinete contiene sólo cuatro cajones y, hasta que se demuestre lo contrario, los cajones negativos no existen");
}
