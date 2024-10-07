const colors = require("colors")
const readline = require("readline-sync")
const axios = require("axios")

console.clear()

console.log(`
  
    _  _     _       _   ___   ___   ___  __  __ 
   | || |___| |_ ___| | |   \\ / _ \\ / _ \\|  \\/  |
   | __ / _ \\  _/ -_) | | |) | (_) | (_) | |\\/| |
   |_||_\\___/\\__\\___|_| |___/ \\___/ \\___/|_|  |_|
                                                 
  
  `.cyan.bold);


console.log("O que deseja fazer?")
console.log(`
    [1] Fazer uma reserva
    [2] Consultar uma reserva
  `)


var choice = parseInt(readline.question(">>> "))

if (choice === 1) {
	console.clear()

	console.log("Fazer uma reserva".cyan.bold)
  var name = readline.question("Digite seu nome: ")
  console.log(">>> ")
  
  console.clear()

	console.log("Fazer uma reserva".cyan.bold)
  var date = readline.question("Digite a data da sua reserva: ")
  console.log(">>> ")

  console.clear()

	console.log("Fazer uma reserva".cyan.bold)
  var room = readline.question("Digite o seu quarto: ")
  console.log(">>> ")

  console.clear()

  axios
    .post("http://localhost:8800/fazerReserva", {
      name: name,
      date: date,
      room: room
    })
    .then((response) => {
	    console.log("Fazer uma reserva".cyan.bold)
      
      console.log(response.data.msg) 
      console.log()
                 
    })
}
if (choice === 2) {
	console.clear()

  console.log("Consultar uma reserva".cyan.bold)

  console.log("Digite o número ID da sua reserva:\n")
  var id = readline.question(">>> ")
  
  axios
    .post("http://localhost:8800/listarReservas", {
      id: id
    })
    .then((response) => { 
      if (response.data[0] != undefined) {
        let q = response.data[0]

	      console.clear()
        console.log("Consultar uma reserva".cyan.bold)
        console.log(`>>> ID: ${q.id} | Nome: ${q.name} | Data: ${q.date} | Quarto: ${q.room}`)
      } else {
        console.log("Reserva não encontrada")
      }
    }
  )
}

