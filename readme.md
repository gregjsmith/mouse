## Mouse

#### Tiny Javascript mocking library


Test a method was called once:

    var hello = {
	    sayit: function(){
		    console.log("hello");
	    }
    }


    var mock = mouse.mocks.watch(hello);

    hello.sayit();

    ok(mock.called({name: 'sayit', times: 1}))



    var Mod = function(){
    	return {
    		switchOn: function(){

    		}
    	}
    }
    
    var m = new Mod();

    var mock = mouse.mocks.watch(m);

    m.switchOn();

    ok(mock.called({name: 'switchOn', times: 1}))
	

or that a method wasn't called:

	var Mod = function(){
    	return {
    		switchOn: function(){

    		}
    	}
    }
    
    var m = new Mod();

    var mock = mouse.mocks.watch(m);

    ok(mock.called({name: 'switchOn', times: 0}))
	