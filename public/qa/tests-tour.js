suite('Test tour', function(){
	test('It displays the tour title', function(){
        var title = $("h1").first().text();
		assert(title == 'Tour');
	});
	test('It displays the west coast sign', function(){
		var title = $("h3").first().text();
		assert(title == 'West coast fall 2017');
	});
    test('It shows 3 elements in discography list', function(){
		var q = $("li.tour").length;
		assert(q == 5);
	});
});