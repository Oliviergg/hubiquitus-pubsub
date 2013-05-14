{Actor} = require "hubiquitus"

class a2Actor extends Actor
 
	constructor: (topology) ->
		super
		@type = "a2Actor"

	onMessage: (hMessage) ->
		@log "info", "A2 receive > "+JSON.stringify(hMessage)

module.exports = a2Actor