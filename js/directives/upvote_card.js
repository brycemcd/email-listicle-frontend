elFrontend.directive("upvoteCard", function(Article) {
  var voteSuccess = function(data) {
    $("#" + cardId).css("background-color", "green");
  };

  var voteFail = function(resp) {

  };

  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      elem.bind("click", function(evt) {
        evt.preventDefault();
        cardId = attrs.id;
        Article.upvoteCard(attrs.id).then(voteSuccess, voteFail);
      });
    }
  };
});
