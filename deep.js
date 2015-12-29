(function(){
	var switcher = [], 
		maxScroll = 0, 
		result = 0, 
		currentScroll = 0, 
		scrollPosition = 0;

	var getPosition = function(){
		maxScroll = document.documentElement.scrollHeight || document.documentElement.scrollTopMax;
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

			if (scrollPosition < currentScroll) {
				scrollPosition = currentScroll;
				getPercent(currentScroll*100/maxScroll);			
			};
	}

	var getPercent = function(a){
		if (a <= 20 && a > 0 && !switcher[0]) {
				result = 'from 0% to 20%';
				sendEvent(result);
				switcher[0] = !switcher[0];
		}else if(a <= 40 && a > 20 && !switcher[1]){
				result = 'from 20% to 40%';
				sendEvent(result);
				switcher[1] = !switcher[1];
		}else if(a <= 60 && a > 40 && !switcher[2]){
				result = 'from 40% to 60%';
				sendEvent(result);
				switcher[2] = !switcher[2];
		}else if(a <= 80 && a > 60 && !switcher[3]){
				result = 'from 60% to 80%';
				sendEvent(result);
				switcher[3] = !switcher[3];
		}else if(a > 80 && !switcher[4]){
				result = 'from 80% to 100%';
				sendEvent(result);
				switcher[4] = !switcher[4];
		}
	};

	var sendEvent = function(a){
		ga('send', 'event', 'Scroll ', a, {'nonInteraction': 1});
	}

	window.addEventListener('scroll', getPosition );
})();
