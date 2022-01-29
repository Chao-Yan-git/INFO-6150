var Sample = require("./model/Sample")

module.exports = function(app){

    // app.get('/', function (req, res) {
    //     res.send('hello world')
    // })
    

    app.get('/api/show', function(req, res){

        Sample.find(function(err, samples){

            if(err)
                res.send(err)
            console.log(samples)
            res.json(samples)
        })
    })

    app.post("/api/insert", function(req, res){

        console.log(req.body)
        var newRec = new Sample(req.body)
        newRec.save(function(err, resuts){

            if(err)
                console.log("err ", err)
            
            console.log("Saved ", resuts)
            res.json(resuts)    
        })


    })


    app.get('/', function(req, res){

        res.sendfile("./public/views/index.html")
    })

    

}