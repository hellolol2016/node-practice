let express = require('express')
let app = express();
var fs = require('fs');
let url = require('url');
let port = 8080;
let nF;

fs.readFile('404.html', function(err,data){
    nF = data;
})

app.get('/', (req, res)=>{
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    
    fs.readFile(filename, function(err, data){
        if(err){
            res.send(nF)
        }else{
            res.send(data);
        }
    })
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "."+q.pathname;
//     fs.readFile(filename, function(err, data){
//         if(err){
//             res.writeHead(404, {'Content-Type' : 'text/html'});
//             return res.end(nF);
//         }
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);