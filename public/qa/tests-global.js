suite('Global Tests', function(){
	test('The title of the page is Coldplay', function(){
		assert(document.title && document.title.match(/\S/) && document.title == 'Coldplay');
	});

    test('In every page is a link to root', function(){
		assert('a[href="/"]');
	});

    test('In every page is a link to discography', function(){
		assert('a[href="/discography"]');
	});

    test('In every page is a link to tour', function(){
		assert('a[href="/tour"]');
	});
});