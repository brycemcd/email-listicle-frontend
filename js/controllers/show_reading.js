elFrontend.controller("showReading", function($scope, $timeout, Article) {
  $scope.cards = [];

  $scope.fetchArticles = function() {
    Article.allReading().then(
      //success
      function(resp) {
        $scope.cards = resp.data;
      },
      // failure
      function(data) {
      }
    );
  };
});
