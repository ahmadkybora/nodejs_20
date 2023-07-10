const i18next = require("i18next");
const i18nextBackend = require("i18next-fs-backend");
const i18nextMiddleware = require("i18next-http-middleware");
const { app } = require("@utils/general");

i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    preload: ["en', 'fa"],
    backend: {
      loadPath: "./locales/{{lng}}/translation.json"
    }
});

app.use(i18nextMiddleware.handle(i18next));
