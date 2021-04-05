---
title: Install an API Client
---

# Install an API Client

## JavaScript API Client

- **GitHub:** [DocSpring/docspring-javascript](https://github.com/DocSpring/docspring-javascript)
- **NPM:** [docspring](https://www.npmjs.com/package/docspring)

Add `docspring` to your `package.json`

```bash
npm install docspring --save
```

Or with Yarn:

```bash
yarn add docspring
```

## Ruby API Client

- **GitHub:** [DocSpring/docspring-ruby](https://github.com/DocSpring/docspring-ruby)
- **RubyGems:** [docspring](https://rubygems.org/gems/docspring)

Run the following command to install the `docspring` gem:

```bash
gem install docspring --no-document
```

Or add the following to your `Gemfile`:

```ruby
gem "docspring"
```

Then run:

```bash
bundle install
```

## Python API Client

- **GitHub:** [DocSpring/docspring-python](https://github.com/DocSpring/docspring-python)
- **PyPi:** [docspring](https://pypi.org/project/docspring/)

Run the following command to install the `docspring` package:

```bash
pip install --upgrade docspring
```

or

```bash
easy_install --upgrade docspring
```

## PHP API Client

- **GitHub:** [DocSpring/docspring-php](https://github.com/DocSpring/docspring-php)
- **Packagist:** [docspring/docspring](https://packagist.org/packages/docspring/docspring)

Run the following command to install the `docspring/docspring` package:

```bash
composer require docspring/docspring
```

Or add the following to your `composer.json`:

```ruby
    "require": {
        "docspring/docspring": "*"
    }
```

Then run:

```bash
composer install
```

## Java API Client

- **GitHub:** [DocSpring/docspring-java](https://github.com/DocSpring/docspring-java)
- **Maven:** [com.docspring/DocSpring](https://search.maven.org/search?q=g:com.docspring)

## Maven

Add the following to the `<dependencies>` section in your `pom.xml`:

```
<dependency>
  <groupId>com.docspring</groupId>
  <artifactId>DocSpring</artifactId>
  <version>1.0.0</version>
</dependency>
```

## Gradle

Add the following to the `dependencies` section in your `build.gradle`:

```
compile 'io.docspring:DocSpring:1.0.0'
```

## C# API Client

- **GitHub:** [DocSpring/docspring-csharp](https://github.com/DocSpring/docspring-csharp)
- **NuGet:** [DocSpring.Client](https://www.nuget.org/packages/DocSpring.Client)

Install the [DocSpring.Client](https://www.nuget.org/packages/DocSpring.Client) package
from NuGet:

## Package Manager

```bash
PM> Install-Package DocSpring.Client
```

## .NET CLI

```bash
dotnet add package DocSpring.Client
```

## Paket CLI

```bash
paket add DocSpring.Client
```

**If you would like DocSpring to support a new language, please send us an email at: support@docspring.com**

We define our API endpoints and request/response schemas with an OpenAPI Specification (formerly known as [Swagger](https://swagger.io/).) We use [openapi-generator](https://github.com/OpenAPITools/openapi-generator) to automatically generate our API clients.

Please view [the OpenAPI Specification page](./openapi) for more information.