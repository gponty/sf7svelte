# Symfony/Svelte Stack with FrankenPHP and Vite.js

Welcome to the Symfony/Svelte stack project! This project aims to provide a simple setup for building applications using Symfony on the backend and Svelte on the frontend, with the help of FrankenPHP and Vite.js for efficient development.

You can find the full article on my blog: [Symfony/Svelte Stack with FrankenPHP and Vite.js](https://www.dev-web.io/2024/02/17/frankenphp-sf7-vite-svelte)

## Prerequisites

Before getting started, ensure you have the following prerequisites installed:

- Docker

## Getting Started

1. Clone the repository:
   ```
    git clone https://github.com/gponty/sf7svelte.git
   ```

2. Navigate into the project directory:
   ```
    cd symfony-svelte-stack
   ```
3. Build and start the Docker containers:
   ```
   docker compose build --no-cache
   docker compose up --pull always -d --wait
   ```
4.  Access Symfony:
   Symfony will be accessible at [http://localhost:8000](http://localhost:8000)
5. Access Vite.js:
   Vite.js will be accessible at [http://localhost:5173](http://localhost:5173)

## Adding Svelte and Bulma

To add Svelte and Bulma to the project, follow these steps:

1. Install Svelte and Bulma using Yarn:
    ```
   docker compose exec node yarn add @sveltejs/vite-plugin-svelte svelte sass bulma
   ```
2. Modify the `vite.config.js` file to include Svelte and Bulma plugins.

3. Restart the Vite.js server:
    ```
   docker compose exec node yarn dev
   ```

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to add.

## License

This project is licensed under the [MIT License](LICENSE).
