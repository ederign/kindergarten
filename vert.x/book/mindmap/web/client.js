var eb = new vertx.EventBus(window.location.protocol + '//' +
	window.location.hostname + ':' +
	window.location.port + '/eventbus');
eb.onopen = function() {
	eb.send('mindMaps.list', {}, function(res) {
       console.log(res);
});
};