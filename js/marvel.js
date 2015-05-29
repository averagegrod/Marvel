$( document ).ready(function() {
  var offset = 0;
  
  var now = moment();
  var today = moment().format("YYYY-MM-DD");
  var fiveYrsAgo = moment().subtract(5, 'years').format("YYYY-MM-DD");
  var fiveYrsAgoRange = moment().subtract(5, 'years').add(7, 'days').format("YYYY-MM-DD");
  var tenYrsAgo = moment().subtract(10, 'years').format("YYYY-MM-DD");
  var tenYrsAgoRange = moment().subtract(10, 'years').add(7, 'days').format("YYYY-MM-DD");
  $('#date').append(today);
  var comicUrl ="http://gateway.marvel.com:80/v1/public/comics?limit=100&dateRange="+fiveYrsAgo+"%2C"+fiveYrsAgoRange+"&ts="+ts+"&apikey="+publicKey+"&hash="+hash;
  console.log(comicUrl);
  $.get(comicUrl, function(data){
  	console.log(data);
  	$('.five').append('<div class="cover">Published 5 years ago:');
  	$.each(data.data.results, function(i,v) {
  		var thisComic = data.data.results[i];
  		var thumbnailPath = thisComic.thumbnail.path;
  		var thumbnailSize = "standard_large";
  		var imgType = thisComic.thumbnail.extension;
  		var thumbnail = thumbnailPath + '/' + thumbnailSize + '.' + imgType;

//		  	$('#result').append(data.data.results[i].title+'<br />');
  			$('.five').append('<div class="cover"><img src="'+thumbnail+'">');

  		});

  })

  comicUrl ="http://gateway.marvel.com:80/v1/public/comics?limit=100&dateRange="+tenYrsAgo+"%2C"+tenYrsAgoRange+"&ts="+ts+"&apikey="+publicKey+"&hash="+hash;
  console.log(comicUrl);
  $.get(comicUrl, function(data){
  	console.log(data);
  	$('.ten').append('<div class="cover">Published 10 years ago:');
  	$.each(data.data.results, function(i,v) {
  		var thisComic = data.data.results[i];
  		var thumbnailPath = thisComic.thumbnail.path;
  		var thumbnailSize = "standard_large";
  		var imgType = thisComic.thumbnail.extension;
  		var thumbnail = thumbnailPath + '/' + thumbnailSize + '.' + imgType;

//		  	$('#result').append(data.data.results[i].title+'<br />');
  			$('.ten').append('<div class="cover"><img src="'+thumbnail+'">');

  		});
  })

});
