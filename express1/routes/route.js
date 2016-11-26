module.exports = function(app){
    app.get('/',function(req,res){
        res.send('hello');
    });

    app.get('/doc',function(req,res){
        res.send('doc');
    });

    app.get('/admin',function(req,res){
        res.send('admin');
    });
};
