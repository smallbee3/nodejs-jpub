var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var stack_list = [];

app.route('/stack/:stack_name')
.get(( req, res )=>{
   var stack_name = req.params.stack_name;
   var result;
   if( stack_list[ stack_name ] ){
       result = stack_list[ stack_name ].pop();
   }else{
       result = null;
   }

   res.json( result );
})
.put(( req, res )=>{
   var stack_name = req.params.stack_name;

   if( stack_list[ stack_name ] ){
       stack_list[ stack_name ].push( req.body );
   }else{
       stack_list[ stack_name ] = [ req.body ];
   }

   console.log(1, stack_list);
   console.log(2, stack_list[ stack_name ]);

   res.json({
       result:'ok'
   });
});


app.listen(8800, () => {
    console.log("Start");
})