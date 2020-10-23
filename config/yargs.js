const description = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {

   default: true,
   alias: 'c',
   desc: 'marca como completado o pendiente la tarea'
};


                





const argv = require('yargs')
              
              .command('crear', 'crear un elemento por hacer', {
              	description
               })


               .command('actualizar', 'actualiza el estado completado de una tarea', {
              	description,

              	completado
              })
               
               .command('borrar', 'borra una tarea', {
                description
                
              })
               .help()
               .argv;


         module.exports = {
         	argv
         }
