module("when checking a method call");

test("can verify that a method is called once", function(){
	var mock = mouse.mocks.watch(hello);
	hello.sayit();
	ok(mock.called({name: 'sayit', times: 1}))
})

test("can verify that a method was not called at all", function(){
	var mock = mouse.mocks.watch(hello);
	ok(mock.called({name: 'sayit', times: 0}))
})

test("can verify when a funciton was called once on a module pattern object", function(){
	var m = new Module();
	var mock = mouse.mocks.watch(m);
	m.aFunction();
	ok(mock.called({name: 'aFunction', times: 1}))
})

test("can verify when a function was not called on a module pattern object", function(){
	var n = new Module();
	var mock = mouse.mocks.watch(n);
	ok(mock.called({name: 'aFunction', times: 0}))
})

test("can verify when a function was called on a prototype revealing object", function(){
	var p = new ProtoT();

	var mock = mouse.mocks.watch(p);

	p.doThings();

	ok(mock.called({name: 'doThings', times: 1}))
})

module("when forcing a function to return a value")

test("can make a function return a primitive", function(){
	var f = function(x){
		return x();
	}

	var mock = mouse.mocks.returns(3);
	
	var val = f(mock);
	ok(val === 3)
})

test("can make a function return an object", function(){
	
	var f = function(){
		return {
			x: function(val){
				return val();
			}
		}
	}

	var mock = mouse.mocks.returns({exists: true})

	var sut = new f();

	var val = sut.x(mock);

	ok(val.exists === true)

})