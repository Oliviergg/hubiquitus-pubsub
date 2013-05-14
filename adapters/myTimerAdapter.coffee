{TimerAdapter} = require "hubiquitus"
request = require "request"

class myTimerAdapter extends TimerAdapter
	constructor: (properties) ->
		super
		@count = 0

	startJob: =>
		@count+=1
		@owner.emit "message", @owner.buildMessage @owner.actor, "data", {tick:"new message ##{@count}"}

module.exports = myTimerAdapter