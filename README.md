# utxo-manager

This is a simple proof-of-concept for an architecture that can be used to build a custom React or React-Native front-end on top of [Blockstream Greenlight](https://github.com/Blockstream/greenlight) Lightning Node as a service.

![utxoman drawio](https://github.com/lonestarr-btc/utxo-manager/assets/3266158/5be21efd-3cbc-443f-bbbb-9987f3b6d209)

[server](https://github.com/lonestarr-btc/utxo-manager/tree/main/server) represents the gateway API that is accessible to clients (React or React-Native). This endpoint filters requests back to the Django server which has direction connection to the Greenlight API.

[services](https://github.com/lonestarr-btc/utxo-manager/tree/main/services) this is the Django endpoint that runs the Greenlight API. It knows how to access the credentials needed to communication with the Greenlight API.

A start.sh file is located in each directory. This is a simple bash script that can be run to start each API. In development they should be run from their own terminal.
