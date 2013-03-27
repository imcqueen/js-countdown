# Javascript Countdown

A dependency-free way to show a countdown to a future date.

## Basic Usage
	<div id="clock">loading countdown...</div>
	
	var countdown = new jsCountdown({container:"clock", endTime: new Date(2020,0,0,0,0,0)})
	countdown.countDown();

## Parameters

- Container: (string|object) DOM element or string of the id that will contain the countdown
- endTime: (integer|Date object) The date/time to be counted down towards
- callback: (function) The callback function is executed when the timer reaches zero