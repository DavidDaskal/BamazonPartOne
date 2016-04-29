# BamazonPartOne

//From TERMINAL

Davids-MBP:bamazon DaskalDV$ node bamazon.js
connection is good
The name of this product is: FenderStrat. Item ID is: 1. Price: 650
The name of this product is: Epiphone. Item ID is: 2. Price: 850
The name of this product is: Rickenbacker. Item ID is: 3. Price: 450
The name of this product is: MarrJaguar. Item ID is: 4. Price: 2650
The name of this product is: Iphone. Item ID is: 5. Price: 600
The name of this product is: Samsungs6. Item ID is: 6. Price: 650
The name of this product is: Macbook. Item ID is: 7. Price: 1450
The name of this product is: Studioxps. Item ID is: 8. Price: 650
The name of this product is: TheWall. Item ID is: 9. Price: 90
The name of this product is: Blackstar. Item ID is: 10. Price: 82
prompt: productID:  4
prompt: Quantity:  2
4 2
There is enough in stock. Your total cost is $5300
update completed
Davids-MBP:bamazon DaskalDV$ 


//SCREEN SHOT OF UPDATED DATABASE BAMAZON
mysql> select * from products;
+--------+--------------+----------------+-------+---------------+
| ItemID | ProductName  | DepartmentName | Price | StockQuantity |
+--------+--------------+----------------+-------+---------------+
|      1 | FenderStrat  | Guitars        |   650 |            12 |
|      2 | Epiphone     | Guitars        |   850 |             8 |
|      3 | Rickenbacker | Guitars        |   450 |            11 |
|      4 | MarrJaguar   | Guitars        |  2650 |             0 |--> decreased by 2 quantities
|      5 | Iphone       | CellPhones     |   600 |             6 |
|      6 | Samsungs6    | CellPhones     |   650 |             4 |
|      7 | Macbook      | Laptops        |  1450 |             5 |
|      8 | Studioxps    | Laptops        |   650 |             6 |
|      9 | TheWall      | Records        |    90 |            20 |
|     10 | Blackstar    | Records        |    82 |             8 |
+--------+--------------+----------------+-------+---------------+
10 rows in set (0.00 sec)



