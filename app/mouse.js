var mouse = mouse || {}

mouse.mocks = function(){
	var calls = []
	var funcs = []

	var resetState = function(){
		calls = []
		funcs = []
	}
	
	var createMock = function(key, context, origfunc){
		var f = function() {
			calls.push({key: key})
			return origfunc.apply(context, arguments);
		};
		funcs.push({key: key, func: f});
		return f;
	}

	var watch = function(obj){
		
		for(var key in obj){
			obj[key] = createMock(key, obj, obj[key]);
		}

		return this;
	}

	var called = function(site){
		var f;
		var fName;

		for (var i = 0; i < funcs.length ; i++) {
			var key = funcs[i].key;

			if(key === site.name){
				f = funcs[i]
				fName = key;
			}
		}

		var thisCalled = 0;
		if (calls.length > 0) {
			calls.forEach(function(val, idx, arr){
				if (val.key === key) {
					thisCalled +=1;
				};
			})
		};
		
		resetState();

		return (fName === site.name) && (thisCalled === site.times);
	}

	return {
		watch: watch,
		called: called
	}

}();