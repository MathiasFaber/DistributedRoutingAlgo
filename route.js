let graph = {
	U: { A: 17, B: 5, C: 11, V: 25 },
	A: { U: 17, C: 3, D: 4 },
	B: { U: 5, C: 4 },
	C: { A: 3, U: 11, B: 4, S: 7, D: 9 },
    D: { A: 4, C: 9, V: 7},
    S: { C: 7, V: 10},
    V: { D: 7, S: 10, U: 25}
};

let shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
      let shortest = null;
      
        // for each node in the distances object
      for (let node in distances) {
          // if no node has been assigned to shortest yet
            // or if the current node's distance is smaller than the current shortest
          let currentIsShortest =
              shortest === null || distances[node] < distances[shortest];
              
            // and if the current node is in the unvisited set
          if (currentIsShortest && !visited.includes(node)) {
              // update shortest to be the current node
              shortest = node;
          }
      }
      return shortest;
  };

  let findShortestPath = (graph, startNode, endNode) => {
 
    // track distances from the start node using a hash object
      let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, graph[startNode]);
   // track paths using a hash object
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
     parents[child] = startNode;
    }
     
    // collect visited nodes
      let visited = [];
   // find the nearest node
      let node = shortestDistanceNode(distances, visited);
    
    // for that node:
    while (node) {
    // find its distance from the start node & its child nodes
     let distance = distances[node];
     let children = graph[node]; 
         
    // for each of those child nodes:
         for (let child in children) {
     
     // make sure each child node is not the start node
           if (String(child) === String(startNode)) {
             continue;
          } else {
             // save the distance from the start node to the child node
             let newdistance = distance + children[child];
   // if there's no recorded distance from the start node to the child node in the distances object
   // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
             if (!distances[child] || distances[child] > newdistance) {
   // save the distance to the object
        distances[child] = newdistance;
   // record the path
        parents[child] = node;
       } 
            }
          }  
         // move the current node to the visited set
         visited.push(node);
   // move to the nearest neighbor node
         node = shortestDistanceNode(distances, visited);
       }
     
    // using the stored paths from start node to end node
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
     shortestPath.push(parent);
     parent = parents[parent];
    }
    shortestPath.reverse();

    //this is the shortest path
    let results = {
     distance: distances[endNode],
     path: shortestPath,
    };
    console.log(results)
    request1(results)
   };

const predefinedShortestPath = [ 'U', 'B', 'C', 'A', 'D', 'V' ]

// The following functions each sends a http request to the server belonging to the specified node. 
function request1 (sPath){
    if(sPath .path = predefinedShortestPath){
        var XMLHttpRequest = require('xhr2');
        var xhr = new XMLHttpRequest();
        const urlU = 'http://localhost:8080';

        xhr.open('GET', urlU);
        xhr.send();

        xhr.onreadystatechange=(e)=>{
            console.log(xhr.response)
        };
        request2()
    }
}

function request2 (){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const urlB = 'http://localhost:8082';

    xhr.open('GET', urlB);
    xhr.send();

    xhr.onreadystatechange=(e)=>{
        console.log(xhr.response)
    };
    request3()
}


function request3 (){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const urlC = 'http://localhost:8083';

    xhr.open('GET', urlC);
    xhr.send();

    xhr.onreadystatechange=(e)=>{
        console.log(xhr.response)
    };
    request4()
}

function request4 (){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const urlA = 'http://localhost:8081';

    xhr.open('GET', urlA);
    xhr.send();

    xhr.onreadystatechange=(e)=>{
        console.log(xhr.response)
    };
    request5()
}

function request5 (){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const urlD = 'http://localhost:8084';

    xhr.open('GET', urlD);
    xhr.send();

    xhr.onreadystatechange=(e)=>{
        console.log(xhr.response)
    };
    request6()
}

function request6 (){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const urlV = 'http://localhost:8086';

    xhr.open('GET', urlV);
    xhr.send();

    xhr.onreadystatechange=(e)=>{
        console.log(xhr.response)
    };
}

findShortestPath(graph, "U", "V")

// Run the "findShortestPath" function to find the shortest path
// Make a function that loops through shortest opath array, and from there sends request to the servers dedicated to each node on the shortest path. 

