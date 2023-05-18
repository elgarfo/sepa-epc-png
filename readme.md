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
|amount   |amount to pay              |float |e.g. 1.23    |

# usage example

http://localhost:3000/?name=Wikimedia+Foerdergesellschaft&iban=DE33100205000001194700&ref=Spende+fuer+Wikipedia&amount=123.45

# practical usage example

this was specifically built to be able to pay amazons monthly invoices easier and faster. for that purpose i published [this app](https://sepa-epc-png.onrender.com) on [render](https://render.com) and wrote an [accompanying userscript](https://github.com/elgarfo/gm_scripts/blob/master/amazon_invoice_epc.user.js) to be used in tampermonkey (might work in greasemonkey, violentmonkey. but i did only test with TM).

the result is a scannable epc-qr code on top of amazons monthly invoice website (see image), which automatically pulls the relevant info from the page.  
<img src="https://github.com/elgarfo/sepa-epc-png/assets/3199424/e8dcf1f4-be4d-4905-bf47-a33b3a5af738" width="350">
