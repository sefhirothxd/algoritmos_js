//Proyecto del día de hoy:
// En base un problema que detectes en la vida real, escribir un párrafo que lo explique.
// Con ello detectar las entidades y los pasos a seguir para resolverlo.
// Luego, escribir un código que genere los caminos posibles mediante ifs.
// tienen el code que hicimos en la clase para guiarse.
// nombre del proyecto: algoritmos_js
// En el live-code revisaremos sus algoritmos y las buenas practicas que hemos aprendido hasta el día de hoy.

const persona = {
  nombre: 'el bryan',
  hobby: ['programar', 'series', 'cine', 'juegos'],
  lenguaje: ['javascript'],
  durmioBien: (e) => {
    if (e) {
      return true;
    } else {
      return false;
    }
  },
  despertoTemprano: (e) => {
    if (e) {
      return '8am';
    } else {
      return '10am';
    }
  },
};

const larnu = {
  nombre: 'larnu',
  horaEntrada: '8am',
  horaSalida: '5pm',
  tarea: true,
  estudianteLarnu: ['el bryan'],
};

if (larnu.estudianteLarnu.includes(persona.nombre)) {
  console.log(`${persona.nombre} es estudiante de LarnU`);
  if (persona.durmioBien(true)) {
    console.log('si 😁');
    if (larnu.horaEntrada === persona.despertoTemprano(true)) {
      console.log('Entro a tiempo y estudio :D');
    } else {
      console.log('Entro tarde y apenas entendio :(');
    }
  } else {
    console.log('No😢. no entendio y realizo la tarea');
  }
} else {
  console.log(`${persona.nombre} no es estudiante de LarnU`);
}
