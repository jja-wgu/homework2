(function () {
	angular.module('wgu', [])
		.config(['$httpProvider', configFunc]);
	
	function configFunc($httpProvider) {
		// $httpProvider.interceptors.push('part1Interceptor');
	}
})();