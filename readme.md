## Mouse

#### Tiny Javascript mocking library


So far, only one method!


    var hello = {
	    sayit: function(){
		    console.log("hello");
	    }
    }


    var mock = mouse.mocks.watch(hello);

    hello.sayit();

    ok(mock.called({name: 'sayit', times: 1}))