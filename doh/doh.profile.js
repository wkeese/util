(function(){
	var testResourceRe = /^doh\/tests/,
		list = {
			"doh/doh.profile":1,
			"doh/package.json":1,
			"doh/tests":1
		},
		copyOnly = function(mid){
			return (mid in list);
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				return testResourceRe.test(mid);
			},

			copyOnly: function(filename, mid){
				return copyOnly(mid);
			},

			amd: function(filename, mid){
				return !testResourceRe.test(mid) && !copyOnly(mid) && /\.js$/.test(filename);
			},
		},

		trees:[
			[".", ".", /(\/\.)|(~$)/]
		]
	};
})()