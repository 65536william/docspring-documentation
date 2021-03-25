---
title: OpenAPI Specification (Swagger)
---

# OpenAPI Specification (Swagger)

We define our API endpoints and request/response schemas with an [OpenAPI Specification](https://swagger.io/docs/specification/about/) (formerly known as [Swagger](https://swagger.io/).)

- Here is our OpenAPI v2 specification: https://docspring.com/api-docs/v1/swagger.json

## Generated API Client Libraries

We use [openapi-generator](https://github.com/OpenAPITools/openapi-generator) to automatically generate our API clients. We've also added some custom code to our clients, including some helper functions that wait for PDFs to be processed.

Please [let us know](mailto:support@docspring.com) if we don't support your programming language, and we'll work on an official API client. However, if you need to build an integration quickly, the fastest way would be to just send us HTTP requests using your favorite HTTP library.

You could also try generating your own API client with [openapi-generator](https://github.com/OpenAPITools/openapi-generator). Follow [the installation instructions](https://github.com/OpenAPITools/openapi-generator#1---installation) to install `openapi-generator`. Then generate an API client using our OpenAPI specification:

```bash
openapi-generator-cli generate \
  --input-spec "https://docspring.com/api-docs/v1/swagger.json" \
  --generator-name elixir \
  --output "./docspring-elixir"
```

Here's the list of languages that [openapi-generator](https://github.com/OpenAPITools/openapi-generator) supports:

> **ActionScript**, **Ada**, **Apex**, **Bash**, **C#** (.net 2.0, 3.5 or later), **C++** (cpprest, Qt5, Tizen), **Clojure**, **Dart (1.x, 2.x)**, **Elixir**, **Elm**, **Eiffel**, **Erlang**, **Go**, **Groovy**, **Haskell** (http-client, Servant), **Java** (Jersey1.x, Jersey2.x, OkHttp, Retrofit1.x, Retrofit2.x, Feign, RestTemplate, RESTEasy, Vertx, Google API Client Library for Java, Rest-assured, Spring 5 Web Client), **Kotlin**, **Lua**, **Node.js** (ES5, ES6, AngularJS with Google Closure Compiler annotations, Flow types) **Objective-C**, **Perl**, **PHP**, **PowerShell**, **Python**, **R**, **Ruby**, **Rust** (rust, rust-server), **Scala** (akka, http4s, scalaz, swagger-async-httpclient), **Swift** (2.x, 3.x, 4.x), **Typescript** (AngularJS, Angular (2.x - 6.x), Aurelia, Fetch, Inversify, jQuery, Node)

> (This list might be out of date. You can [find an up-to-date list in the README.](https://github.com/OpenAPITools/openapi-generator#overview).)
