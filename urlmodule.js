var http = require("http")

var addr = "http://localhost:8080/default.html?year=2023&month=march"

const url =  require("url")

const q = url.parse(addr,true)

const host = q.host

console.log("host", host)

const path = q.pathname

console.log("path", path)

const querysearch = q.search

console.log("querypath", querysearch)

const queryObject =  q.query

console.log("queryObject",queryObject)