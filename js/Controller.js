function MainCtrl($scope, $rootScope)
{
	$scope.test = "hello world";
	$rootScope.todsob  = "THIS IS FROM MAIN";
	
}

function BillCtrl($scope)
{
	/*$scope.bills = [
		{name:"ค่าน้ำ", price:20},
		{name:"ค่าไฟ", price:200}
	]*/
}

function ProductCtrl($scope, $rootScope)
{
	$scope.products = [
		{name:"water", price:20, count:1,
		 picture:"water-bottle.jpg"},
		{name:"sandwich", price:30, count:1,
		  picture:"sandwich.jpg"
		},
		{name:"burger", price:40, count:1,
		 picture:"burger.gif"
		},
		{name:"Snack", price:50, count:1,
		  picture:"snacks.gif"
		},
		{name:"French Fries", price:50, count:1,
		  picture:"mcdonalds-ff.jpg"
		}

	]

	$scope.plusOne = function(item)
	{
		item.count = item.count + 1;
		$scope.updatePrice();
	}

	$scope.minusOne = function(item)
	{
		item.count = item.count - 1;
		$scope.updatePrice();
	}

	$scope.updatePrice = function()
	{
		//เครียร์บิล ให้ไม่มีสินค้าเลย
		$rootScope.bills = [];

		$scope.sum = 0;
		for(var i=0; i < $scope.products.length; i++)
		{
			$scope.sum += $scope.products[i].price * $scope.products[i].count
			//update bills
			//check wa product > 0 piece mai?
			if($scope.products[i].count > 0)
			{	
				//create bill object
				var bill_price = $scope.products[i].price * $scope.products[i].count;
				var bill = {name:$scope.products[i].name, price:bill_price};
				$rootScope.bills.push(bill);
			}

		}
	}

	$scope.updatePrice();
}

function ContactCtrl($scope)
{
	
}

function AboutCtrl($scope, $rootScope)
{
	$scope.todsob = " THIS IS FROM ABOUT"
}