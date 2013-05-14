require("coffee-script");
hubiquitus=require("hubiquitus")

hubiquitus.start({
    actor: "urn:localhost:tracker",
    type: "htracker",
    properties:{
      channel: {
      actor: "urn:localhost:trackChannel",
      type: "hchannel",
      properties: {
        subscribers: [],
          db:{
           host: "localhost",
           port: 27017,
           name: "admin"
          },
          collection: "trackChannel"
        }
      }
    },
    adapters: [ { type: "socket_in"} ],
    children: [
      {
        actor: "urn:localhost:gateway",
        type: "hgateway",
        log:{
          logLevel: "info"
        },
        children: [
          {
            actor: "urn:localhost:auth",
            type: "hauth"
          }
        ],
        adapters: [ { type: "socket_in"} ],
        properties: {
          socketIOPort: 8080,
          authActor: "urn:localhost:auth",
          authTimeout: 3000
        }
      },
      {
        // Channel manager Actor
        actor: "urn:localhost:channel",
        type: "hchannel",
        properties: {
          subscribers: [],
          collection: "channel",
          db:{
            host: "localhost",
            port: 27017,
            name: "pubsub"
          },
        },
        children:[
        ]
      },
      {
        // Actor that build and publish a message on urn:localhost:channel
        // a message is published every period milliseconds by myTimerAdpater
        // The custom property 'target' is to tell to actor where to send messages
        actor: "urn:localhost:a1",
        type: "a1Actor",
        properties:{
          target:"urn:localhost:channel"
        },
        adapters: [
          { 
            type: "myTimerAdapter", 
            properties: {
              alert: "myTick",
              mode: "millisecond",
              period: 1000,
            }
          }
        ]
      },
      // Actors that listen channel urn:localhost:channel
      {
        // The socket_in is needed because Actor need to receive subscription Ack       
        actor: "urn:localhost:a2",
        type: "a2Actor",
        adapters: [  
          { 
            type: "channel_in",
            channel: "urn:localhost:channel",
          },
          {
            type: "socket_in",
          }
        ]
      },
      {
        // The socket_in is needed because Actor need to receive subscription Ack       
        actor: "urn:localhost:a3",
        type: "a3Actor",
        adapters: [  
          { 
            type: "channel_in", 
            channel: "urn:localhost:channel",
          },
          {
            type: "socket_in",
          }
        ]
      },


    ],  
  }

);