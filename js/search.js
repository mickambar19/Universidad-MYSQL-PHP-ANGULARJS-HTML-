app = angular.module('Inicio',[]);
app.controller('SearchCtrl',function($scope,$http){
	url = 'validarInfo.php'; // The url of our search
		
	// The function that will be executed on button click (ng-click="search()")
	$scope.search = function() {
		
		/*$http.post("validarInfo.php", { "usuario" : $scope.usuario, "password":$scope.password})
		.
		success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			$scope.result = data; // Show result from server in our <pre></pre> element
			window.location.href = data;
		})
		.
		error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;			
		});
		*/
		$http({
		    method: 'POST',
		    url: 'validarInfo.php',
		    data: "usuario=" + $scope.usuario+"&"+"password="+$scope.password,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).
		success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			$scope.result = data; // Show result from server in our <pre></pre> element
			window.location.href = data;
		})
		.
		error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;			
		});
		
	};
});

/**/


