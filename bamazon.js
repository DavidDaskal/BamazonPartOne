var mysql = require("mysql");
var prompt = require("prompt");
prompt.start();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BAMAZON'
});

connection.connect(function(err){
	if (err) {
		console.log(err);
	}
	else {
		console.log('connection is good');
	}
});

 connection.query('SELECT * FROM PRODUCTS',function(err,rows,fields) {
 	
 	for (i=0; i < rows.length; i++) {
 	console.log("The name of this product is: "+rows[i].ProductName+". Item ID is: "+rows[i].ItemID+". Price: "+rows[i].Price);

 	}
 	userOrder();
 });

function userOrder () {
prompt.get(['productID','Quantity'],function (err,res){

	id = res.productID;
	qtyOrdered = res.Quantity;	
	console.log(id,qtyOrdered);
	checkStock();
  });
}

function checkStock (){

	connection.query('SELECT * FROM PRODUCTS',function(err,rows,fields) {
 	
 	for (i=0; i < rows.length; i++) {

 	    if (rows[i].ItemID == id) {
 	    	if (qtyOrdered <= rows[i].StockQuantity) {
 	    		console.log("There is enough in stock. Your total cost is $"+(rows[i].Price * qtyOrdered));
 	    		processOrder(id,qtyOrdered); 
 	    	}
 	    	 else {
 	    	 	console.log("not enough in stock");
 	    	 }
 	    }

 	  }
 	  
 	 });
  }

 function processOrder (id,qtyOrdered) {
 
 	connection.query('UPDATE PRODUCTS SET StockQuantity = StockQuantity - '+qtyOrdered+' WHERE ItemID = ?',[id],function(err,rows,fields) {
 		console.log("update completed");	
	 	
 	});
 	
 		connection.end();

 }


	





