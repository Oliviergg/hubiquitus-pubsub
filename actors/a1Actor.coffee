{Actor} = require "hubiquitus"

class a1Actor extends Actor
 
	constructor: (topology) ->
		super
		@type = "a1Actor"
 
	onMessage: (hMessage) ->
		@send payload : hMessage.payload,  actor: @properties.target
		@log "info", "A1 broadcasted message > "+JSON.stringify(hMessage)

module.exports = a1Actor