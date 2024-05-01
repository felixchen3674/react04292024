/*

1. How internet works

-Me -> ISP -> Server -> so on and so forth 

-when files travel in internet, it travels as a packet (small pieces) and reassemble

*/

/*

2. Intro to Web Development

3 components
- files : HTML, CSS, JS
    *HTTP (Hyper Text Transfer Protocol) : communicates between client and server
- server
- browser (client) : program that enables files from servers to display

*/

/*
3. What is CDN?

Content Delivery Network

It brings service close to user

PoP (point of presence) - Edge Server

Different CDN use different technology to direct user to PoP
-DNS : each PoP has different ip address
-Anycast : each PoP has same ip address
*/

/*
What is REST

REpresentation
State
Transfer

fancy way of saying server responds to create read update delete

Get : if no ID, it gets entire resource
Post : create new resource / Acts on the entire resource
Put : update the resource
Delete: deletes the resource

*/

/*
HTTP crash course

HTTP communication(response) between servers and client's request  response 
Every request is independent 

HTTPs is one with encrypted HTTP using
-SSL : secure sockets layer
-TLS : Transport security layer

get, post, put, delete
*some post request could be get request but not typically used as it is not secure and will be visible on the url unless it is search form where you filter data that is coming back from the server(you are not actually posting)

HTTP status code
1xx : information is received or processing
2xx: Successfully received or accepted
3xx: Redirect/ action must be taken and redirected
4xx: Client error / request does not have what it needs
5xx: Server error / Server failed to fulfill an request

200: OK
201: OK created (successfully POSTed)
301: Moved to new URL
304: not modified
400: bad request
401: unauthorized
404: not found
500: internal server error
*/

