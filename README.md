# Distributed routing algorithm 

## Course: Computernetværk og distribuerede systemer 

### Study Number:
144780
### Name:
Amalie Ida Oxholm

### Study Number:
137841
### Name:
Louise Lynggaard Sørensen

### Study Number:
144681
### Name:
Mathias Faber Kristiansen

# Description of how the assignment is solved
The distributed routing algorithm is supposed to find the shortest/cheapest route from U to V, given this graph that also can be found at the top of the "route.js" document. 

``` javascript 
    let graph = {
        U: { A: 17, B: 5, C: 11, V: 25 },
        A: { U: 17, C: 3, D: 4 },
        B: { U: 5, C: 4 },
        C: { A: 3, U: 11, B: 4, S: 7, D: 9 },
        D: { A: 4, C: 9, V: 7},
        S: { C: 7, V: 10},
        V: { D: 7, S: 10, U: 25}
    };
```


The algortihm in that document finds the shortest/cheapest route, verfies that the route is correct, and starts sending requests asynchronous to the servers which each belong to a node in the graph. The requests are sent one by one, and only allows the next request to be sent, when a response has been received. 

When the request is received at a given server, a response is printed in the terminal, which tells us which server/node that received a request. In that way, it is possible for us to look at the terminal and see the shortest/cheapest route. 

# Instructions on how to setup and test the system 
To be able to make the algorithm calculate the shortest route and send requests to the servers, you will need to open 2 seperate terminals. 

Start by running the following in the first terminal: 
Node server.js
This will start all the servers. 

Then run the following in the second terminal, in order to start the algorithm and send the requests to the servers:
Node route.js

## What is the output?
In the first terminal, you will see that the servers are running on different ports. 
When running the route.js document in your second terminal, you will see that the servers each receives data/requests in your first terminal. 

In the second terminal the shortest/cheapest distance will be printed, as well as which path that the algorithm calculated as the shortes/cheapest.
It is also printed in this terminal, when a response is received from the servers. 

The output of the terminals are showed in the attached screenshots below:

![alt text](/route.png)

![alt text](/server.png)


