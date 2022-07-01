# Welcome to Radar 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

## Install

```sh
npm install
```

## Usage

```sh
npm start
```
The command will run the server on the port 8888 or you can change it by setting the env var PORT.

For hitting the API, do a POST request to `<ENDPOINT>:8888/radar` with a body containing the values `protocols` and `scan`, both of them need to be arrays with at least one element.

The health check API is available at `GET <ENDPOINT>:8888/health`.

## Run tests

```sh
npm run test
```
The tests uses Jest and get the inputs from the [test cases file](./testCases.js).

## Contributing

In case new protocols are available, they can be easily added to the system by adding a new class extending [Protocol](./api/protocol/controller/classes/protocol.js) as a new file in the protocol [directory](./api/protocol/controller/classes/), and adding a new condition on the [controller](./api/protocol/controller/controller.js).

## Author

👤 **Ramiro Clavijo**

* Github: [@ramc88](https://github.com/ramc88)