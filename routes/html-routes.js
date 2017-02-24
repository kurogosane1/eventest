//Dependencies//
//====================================//

//Routes//
//====================================//
module.exports = function(app){
    app.get('/', function(req, res){
        res.send(path.join(__dirname + "./public/index.html"));
    });
};


