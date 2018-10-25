// import express from 'express';
var express = require('express');

let app = express();
const port = 8000;

// app.setHeaders(function (res, path, stat) {
// 	res.set('Access-Control-Allow-Origin', '*');
// });

var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('Access-Control-Allow-Origin', '*')
	}
}

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");


	next();
});


app
	.get('/receipes', function (req, res) {
	const data= {
		data: [
			{
				id: "soup",
				description: "Heat water & \n drink!",
				price_used: "1",
				symbol: "Veg"
			},
			{
				id: "cake",
				description: "Cook & \n eat the cake!",
				price_used: "1",
				symbol: "V"
			},
			{
				id: "salad",
				description: "wash salad & \n enjoy!",
				price_used: "7777",
				symbol: "Veg"
			}
		]
	};

	res.send(data);

})

var server = app.listen(port, function () {

})
