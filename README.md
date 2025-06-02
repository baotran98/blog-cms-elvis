# 🚀 Getting started with Strapi

### `Config database`
```
copy .tmp, public folder trong link google drive vào thư mục gốc của dự án (root folder)
copy .env.example => .env
```

### `build`

Chạy lệnh build trước khi start dự án

```
npm run build
# or
yarn build
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```
