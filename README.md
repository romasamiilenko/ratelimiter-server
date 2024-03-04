# ratelimiter-server

An Express server with rate limiting middleware using antiabuse-ratelimiter.

## Installation

You can install the package via npm:

```bash
npm install ratelimiter-server
```

## Usage

### Setting Up the Server

```javascript
const app = require('ratelimiter-server');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Description

This package provides an Express server with rate limiting middleware using the antiabuse-ratelimiter package. It sets up an Express application with pre-configured rate limiting, logging, and security middleware.

## Dependencies

- [antiabuse-ratelimiter](https://www.npmjs.com/package/antiabuse-ratelimiter): Rate limiting middleware to prevent abuse and ensure fair usage of resources.
- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware for Node.js.
- [helmet](https://www.npmjs.com/package/helmet): Helps secure Express apps by setting various HTTP headers.

## License

This package is open source and available under the [MIT License](LICENSE).
