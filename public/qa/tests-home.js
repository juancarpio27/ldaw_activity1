suite('Test home page', function(){
	test('It displays the welcome sign', function(){
        var title = $("#title").text();
		assert(title == 'Welcome');
	});
    test('It displays the p text', function(){
        var title = $("p").first().text();
		assert(title == 'Best band in the world');
	});
});