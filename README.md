Great Url Shortener
===================

Сервис по сокращению ссылок (по типу bit.ly). В качестве БД - MySQL, бэкенд - Django + DRF, фронтэнд - Vuejs. Фронт обменивается с бэком по REST API. Все упаковано в docker, запуск с помощью docker-compose.

## Запуск локально

```
git clone https://github.com/theodor85/url-shortener.git
cd redis-api
docker-compose -f local.yml up
```

Система поднимется на адресе 0.0.0.0:5000
