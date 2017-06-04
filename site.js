(function(){                                                                     
    var estudoAngular = angular.module('estudoAngular', []);

   estudoAngular.controller('PlanoEscolhidoController',['$scope','$timeout',function($scope,$timeout){

   		$scope.mostrarLoader = false;
   		$scope.passo = 1;
   		$scope.pessoa = {
   			nome: '',
   			email: '',
   			cpf:''
   		};
   		// $interval(function(){
   		// 	console.log($scope.passo);
   		// 	if ($scope.passo <3 )
     //   		$scope.passo+=1;
   			
   		// },3000)

   		function exibirLoader(){
   			$scope.mostrarLoader = true;
   		}

   		function esconderLoader(){
   			$scope.mostrarLoader = false;
   		}

   		$scope.contratar=function(){

   			$scope.passo = null;
   			exibirLoader();
   			$timeout(function() {
   				esconderLoader();
   				$scope.passo = 2;

   			}, 2000);
   		}

   		$scope.enviarApi=function(){
   			
   		}

   }]);



})();