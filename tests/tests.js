module("Mocking Tests");

test("I should be able to create a mock object", function(){
	var mock = mouse.mocks;
	ok(mock !== null)
})

test("I should be able to set an expectation that a method is called once", function(){
	var mock = mouse.mocks.watch(hello);
	hello.sayit();
	ok(mock.called({name: 'sayit', times: 1}))
})

test("I can tell that a method was not called at all", function(){
	var mock = mouse.mocks.watch(hello);
	ok(mock.called({name: 'sayit', times: 0}))
})

test("can tell when a funciton was called once on a module pattern object", function(){
	var m = new Module();
	var mock = mouse.mocks.watch(m);
	m.aFunction();
	ok(mock.called({name: 'aFunction', times: 1}))
})

test("can tell when a function was not called on a module pattern object", function(){
	var n = new Module();
	var mock = mouse.mocks.watch(n);
	ok(mock.called({name: 'aFunction', times: 0}))
})

test("can tell when a function was called on a prototype revealing object", function(){
	var p = new ProtoT();

	var mock = mouse.mocks.watch(p);

	p.doThings();

	ok(mock.called({name: 'doThings', times: 1}))
})