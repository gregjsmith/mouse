module("Mocking Tests");

var hello = {
	sayit: function(){
		console.log("hello");
	}
}


test("I should be able to create a mock object", function(){
	var mock = mouse.mocks;

	ok(mock !== null)
})

test("I should be able to set an expectation that a method is called once", function(){
	var mock = mouse.mocks.watch(hello);

	hello.sayit();

	ok(mock.called({name: 'sayit', times: 1}))
})