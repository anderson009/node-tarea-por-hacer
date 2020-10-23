const fs  = require('fs');


let listaPorhacer = [];

const guardarDB = () => {

	let data = JSON.stringify(listaPorhacer);


	fs.writeFile('db/db.json', data, (err) =>{
		if (err) throw new Error('no se pudo crear');
});
}


const cargarDB = () =>{

	try {

		listaPorhacer = require('../db/db.json');

	}catch (error) {

		listaPorhacer = [];

	}
	

	
}


const crear = (description) =>{

	cargarDB();

	let porHacer = {
		description,
		completado: false

	};

	listaPorhacer.push(porHacer);

	guardarDB();

	return porHacer;
}


const getListado = () =>{
	cargarDB();

	return listaPorhacer;
}



const actualizar = (description, completado= true) =>{

	cargarDB();



	let index = listaPorhacer.findIndex( tarea =>{
		return tarea.description === description
	})

	if (index >= 0) {
		listaPorhacer[index].completado = completado;
		guardarDB();

		return true;
	}else {
		return false;
	}


}

const borrar = (description) => {

	cargarDB();

	let nuevoListado = listaPorhacer.filter( tarea =>{
		return tarea.description !== description;
	});

	if (listaPorhacer.length === nuevoListado.length) {
		return false;
	}else{
		listaPorhacer = nuevoListado;

		guardarDB();

		return true;
	}
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}

