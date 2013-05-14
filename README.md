## [Hubiquitus](http://www.hubiquitus.com) pubsub example.
an Actor named a1 broadcast message every seconds on a publication channel.
Two actors (a2,a3) subscribe to the channel and show receive message on the console.

- start the engine/topology

```shell
	node launch.js
```

- Results :

```
info: urn:localhost:a1 | A1 broadcasted message > {"publisher":"urn:localhost:a1/1616db64 cd84-498a-b290-026ef048ab08","msgid":"a186f1d1-5b5f-4e69-a66c-4a0da59d09d7#8a33d125-b20f-4452-aead-d8177786750f","published":1368554736295,"actor":"urn:localhost:a1/1616db64-cd84-498a-b290-026ef048ab08","type":"data","persistent":false,"payload":{"tick":"new message #2"},"convid":"a186f1d1-5b5f-4e69-a66c-4a0da59d09d7#8a33d125-b20f-4452-aead-d8177786750f"}

info: urn:localhost:a2 | A2 receive > {"payload":{"tick":"new message #2"},"actor":"urn:localhost:a2/738eecc6-05e9-4474-8e35-24fa0b1ffaa0","publisher":"urn:localhost:a1/1616db64-cd84-498a-b290-026ef048ab08","msgid":"a68cc483-f4e0-4817-883a-c3136527092f#6d58ca56-7fdf-447a-8c44-28620b396658#3c5bfc96-9855-4cf4-8292-315907507027","sent":1368554736296,"convid":"a68cc483-f4e0-4817-883a-c3136527092f#6d58ca56-7fdf-447a-8c44-28620b396658","published":1368554736299}

info: urn:localhost:a3 | A3 received > {"payload":{"tick":"new message #2"},"actor":"urn:localhost:a3/1c9d4a88-c40c-4bfb-b6b3-94a26ece638e","publisher":"urn:localhost:a1/1616db64-cd84-498a-b290-026ef048ab08","msgid":"a68cc483-f4e0-4817-883a-c3136527092f#6d58ca56-7fdf-447a-8c44-28620b396658#e965907f-0a12-401f-9985-a17aab251a81","sent":1368554736296,"convid":"a68cc483-f4e0-4817-883a-c3136527092f#6d58ca56-7fdf-447a-8c44-28620b396658","published":1368554736299}
```
