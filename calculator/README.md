
# Calculadora

Este es un proyecto de una calculadora básica desarrollada en React. La aplicación permite realizar operaciones matemáticas simples como suma, resta, multiplicación y división.

![image](https://github.com/OscarEscriba/TareasSTWOscarEscriba21474/assets/128449179/7a88a20b-219c-43d5-bb8b-e1d6f8c1e2ed)


## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Pruebas](#pruebas)
- [Historias de Storybook](#historias-de-storybook)
- [Licencia](#licencia)

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/calculadora.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd calculadora
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para iniciar la aplicación en modo de desarrollo:

```sh
npm start
```
## Estructura del Proyecto
calculadora/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Calculator.js
│   │   ├── Display.js
│   │   ├── __tests__/
│   │   │   ├── Calculator.test.js
│   ├── App.js
│   ├── index.js
│   ├── babel.config.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md

## Pruebas
Para ejecutar las pruebas unitarias tienes que poner el siguiente comando
```sh
npm test
```
## Historias de Storybook
Para documentar y visualizar componentes de forma aislada, Storybook es una herramienta útil. Puedes crear historias para cada componente y verlos en un entorno interactivo.

instala storybook 
    ```sh
    npx sb init
    ```
Ejecuta storybook 
    ```sh
    npm run storybook
    ```
## Licencia
Este README proporciona una descripción completa de tu proyecto de calculadora, incluyendo la instalación, uso, estructura del proyecto, pruebas, cobertura de código, y cómo trabajar con Storybook. Puedes copiar y pegar este contenido en el archivo README.md de tu repositorio en GitHub.
