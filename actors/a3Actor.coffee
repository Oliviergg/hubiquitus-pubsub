{Actor} = require "hubiquitus"

class a3Actor extends Actor
 
	constructor: (topology) ->
		super
		@type = "a3Actor"
		@log "info", "constructor a3Actor"

	onMessage: (hMessage) ->
		@log "info", "A3 received > "+JSON.stringify(hMessage)

module.exports = a3Actor