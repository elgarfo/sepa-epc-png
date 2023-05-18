# sepa-epc-png

easily generate [sepa epc qr codes](https://de.wikipedia.org/wiki/EPC-QR-Code) as png via simple web request.

# usage with docker-compose

just run `docker-compose up` and an express server will serve request on http://localhost:3000/

# query parameters

|parameter|description                |type  |notes        |
|---------|---------------------------|------|-------------|
|name     |name of creditor           |string|<= 70 chars  |
|iban     |iban of creditor           |string|             |
|ref      |unstructured text reference|string|<= 140 chars |
|amount   |amount to pay              |float |i.e. 1.23    |

# usage example

http://localhost:3000/?name=Wikimedia+Foerdergesellschaft&iban=DE33100205000001194700&ref=Spende+fuer+Wikipedia&amount=123.45

