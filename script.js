$(document).ready(function() {
  var colors = ["2f0a41", "42aaae", "a32563", "1b6b9f", "86170f", "7557c3", "e7a154", "005f38", "21950c", "776952"];
  $("#quotebtn").on("click", function() {
    $.getJSON("https://talaikis.com/api/quotes/random", function(a) {
      
      var newColor = Math.floor((Math.random() * 10));
      $(".quotetext").html(a.quote);
      $(".footer").html("<p> &ndash; " + a.author);
      $("body").css({"background-color": "#" + colors[newColor], "transition":"background-color 1s ease"});
      $(".colorchanger").css({"background-color": "#" + colors[newColor], "transition":"background-color 1s ease"});
      $(".colorchangerq").css({"color": "#" + colors[newColor], "transition":"color 1s ease"});
      $(".tweetbtn").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=qktweets%2Cfreecodecamp&text=" + a.quote + " - " + a.author)
        .attr("target", "_blank");
      
      $(".tumblrbtn").attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + a.author +'&content=' + a.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button")
      .attr("target", "_blank");
    });
  });
  $("#quotebtn").trigger("click");
});
