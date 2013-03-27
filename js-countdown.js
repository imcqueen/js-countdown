function jsCountdown(t){
	var that = this;
	that.el = typeof t.container == 'object' ? t.container : document.getElementById(t.container);
	
	that.callback = (typeof t.callback === "function") ? t.callback : that.callback;
	
	//accepts a date object or the number of seconds until the countdown end date
	if(typeof t.endTime == 'object'){
		var d = new Date();
		that.seconds = Math.floor((t.endTime.getTime() - d.getTime())/1000);
	}
	else{
		that.seconds = parseInt(t.endTime);
	}
}

jsCountdown.prototype = {
	seconds:0,
	
	el: {},
	
	callback:function(){},
		
	tick:function(){
		var that = this;
		that.seconds-= 1;
		that.showTime();
	},
	
	showTime: function(){
		var that = this, 
			timeString = '', 
			totalSecs = that.seconds,
			hours,mins;

		hours = Math.floor(totalSecs/3600);
		timeString += (hours < 10) ? "0"+hours : hours;
		totalSecs -= (hours * 3600);
		mins = Math.floor(totalSecs/60);
		timeString += (mins < 10) ? ":0"+mins : ":"+mins;
		totalSecs -= (mins*60);
		timeString += (totalSecs < 10) ? ":0"+totalSecs : ":"+totalSecs;
		
		that.el.innerHTML = timeString;
		//stop the timer if it's at 0
		if(that.seconds < 1) that.stopTicking();
	},
	
	intervalTracker:"",
	
	countDown: function(){
		var that = this;
		that.intervalTracker = setInterval(that.countDownCallback(that,that.tick),1000);
	},
	
	stopTicking:function(){
		var that = this;
		clearInterval(that.intervalTracker);
		if(typeof that.callback == 'function') that.callback();
	},
	
	countDownCallback: function(scope, func){
		return function(){
			func.apply(scope);
		}
	}
}
