// We need to be able to create 7 different servers on different IP adresses. 
// The servers will each contain information from 1 node, meaning that there are a server for each node in the system 
// When the servers are started, and the program is started, we need the servers to print out when a request is send to it.
// In that way, we will end up with a response from only the servers that shows the shortest path. 

var http = require('http');
var port1 = 8080;
var port2 = 8081;
var port3 = 8082;
var port4 = 8083;
var port5 = 8084;
var port6 = 8085;
var port7 = 8086;

//U
serverU = http.createServer(function (req, res) {
  res.write('Package received at server U'); 
  res.end(); 
  console.log('Data received at server U')
}).listen(port1, () => {
	console.log(`Server U is running on http://localhost:${port1}`);
});

//A
serverA = http.createServer(function (req, res) {
	res.write("Package received at server A"); 
	res.end(); 
	console.log('Data received at server A')

  }).listen(port2, () => {
	  console.log(`Server A is running on http://localhost:${port2}`);
  });

//B
serverB = http.createServer(function (req, res) {
	res.write('Package received at server B'); 
	res.end(); 
	console.log('Data received at server B')

}).listen(port3, () => {
	console.log(`Server B is running on http://localhost:${port3}`);
});

//C
serverC = http.createServer(function (req, res) {
	res.write('Package received at server C'); 
	res.end(); 
	console.log('Data received at server C')

}).listen(port4, () => {
	console.log(`Server C is running on http://localhost:${port4}`);
});

//D
serverD = http.createServer(function (req, res) {
	res.write('Package received at server D'); 
	res.end(); 
	console.log('Data received at server D')

}).listen(port5, () => {
	console.log(`Server D is running on http://localhost:${port5}`);
});

//S
serverS = http.createServer(function (req, res) {
	res.write('Package received at server S'); 
	res.end(); 
	console.log('Data received at server S')

}).listen(port6, () => {
	console.log(`Server S is running on http://localhost:${port6}`);
});

//V
serverV = http.createServer(function (req, res) {
	res.write('Package received at server V'); 
	res.end(); 
	console.log('Data received at server V')

}).listen(port7, () => {
	console.log(`Server V is running on http://localhost:${port7}`);
});