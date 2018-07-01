This project is based on scokmen's [angularjs-gulp-boilerplate](https://github.com/scokmen/angularjs-gulp-boilerplate).

## Install

1. npm install
2. bower install
3. npm run dev

## Startup

1. Open terminal, run:

```shell
  npm run mock
```

2. Open another terminal, run:

```shell
  npm run serve
```

## Mock

1. The mock server will provide some `mock` data from `mock/test.json`.
2. The mock server will be a proxy to fetch data for company from `https://api.hitta.se/search/v7/app/company/VdgWZZ___C`, if I access this URL from `angular`, there will be a `CORS` error which require server side add an `access-control-allow-origin header`.

## Bonus

I also implemented Bonus part.

1. In `app/app.config.js`, if `updateReviewOptions` or `updateReviewOptions.url` is not set, then will not post data.
2. If `updateReviewOptions.url` is set, then will post data, after successfully posted data, the alert dialog will show.