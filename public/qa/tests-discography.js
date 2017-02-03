suite('Test discography', function(){
	test('It displays the welcome sign', function(){
        var title = $("h1").first().text();
		assert(title == 'discography');
	});
	test('It shows 3 elements in discography list', function(){
		var q = $("li.disco").length;
		assert(q == 3);
	});
});