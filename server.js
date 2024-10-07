const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "hoteldoom"
})

app.use(cors())
app.use(express.json())

app.post("/listarReservas", (req, res) => {
	const id = req.body.id

	let SQL = "SELECT * FROM reservas WHERE id = ?"

	db.query(SQL, [id], (err, result) => { 
		if(err) console.log(err)
		else res.send(result)
	})
})

app.post("/fazerReserva", (req, res) => {
	const name = req.body.name
	const date = req.body.date
	const room = req.body.room

	let SQL = "INSERT INTO reservas (name, date, room) VALUES (?,?,?)"
	db.query(SQL, [name, date, room], (err, result) => {
		if (err) res.send(err)
		else res.send({msg: "Reserva concluída!"})
	})
})

app.listen(8800, () => { // inicia o servidor na porta 8800
	console.log("servidor iniciado");
})