
# Guia

A continuación una guia de como correr y configurar el proyecto, además de algunas anotaciones y ayudas como rutas documentas para hacer más facil el testeo de esta prueba técnica




## Instalación

Este proyecto fue desarrollado con ubuntu 20 y:
- nodejs v16.13.2
- mysql  Ver 8.0.31-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))

1. Una vez dentro del directorio hay que ejecutar:

```bash
  npm install 
```
2. Después se tiene que crear un archivo con el nombre de ".env" con las credenciales que estan dentro de ".env.example" en la carpeta raiz del proyecto
4. Modificar dentro de .env las crendeciales de su base de datos según se necesite, por defecto viene así

```bash
    DB_HOST=localhost
    DB_DATABASE=cuentame-test
    DB_USER=root
    DB_PASSWORD=
```
5. Ahora se puede correr el proyecto con:
```bash
    npm run start
```
## Ayudas

Adjunte algunas ayudas para hacer más facil las pruebas de este proyecto

1. [En esta carpeta se encuentra una colección de rutas de la API documentadas](https://github.com/ivandez/test-cuentame/tree/v1.0.0-documentation/help/rutas%20documentadas%20para%20POSTMAN) en POSTMAN, hay que importar dicho archivo dentro de la app de POSTMAN
2. [En esta carpeta esta el DUMP de la base de datos con datos de pruebas](https://github.com/ivandez/test-cuentame/tree/v1.0.0-documentation/help/rutas%20documentadas%20para%20POSTMAN)


## Explicación sobre mis soluciones

### Consultar imagenes
Las imagenes subidas pueden ser consultadas copiando el valor de la columna "img_url" dentro de la tabla "posts" y copiando la url dentro del navegador, se va a generar una url parecida a esto "http://localhost:3000/images/1669245128095-308376201-hero2__medium_4_39.jpg" que se tiene que copiar en el navegador
### Ciclo de vida de los request
Normalmente manejo mis backend con
- controladores: son los que reciben el request y devuelven una respuesta
- clases de servicios: manejan la logica de negocio de la app
- clases repositorios: son una capa intermedia entre los modelos y los servicios
- modelos: interactuan con la db
Para esta prueba decidí omitir las clases de servicios y clases repositorios ya que considero que para este MVP se puede hacer consultas a la DB dentro de los controladores.
### No hay tablas de usuarios
En el pdf no se especifica que se necesite una tabla de usuario, por ende el nombre del usuario se pasa con un string al momento de crear un comentario, sin embargo para cumpliar con las formas normales seria bueno tener una tabla unica para los usuarios, sin embargo bajo mi compresion de lo que dice el pdf dicidí no agregarla
### Git y ramas
Decidí usar una estrategia de tener una rama main, que se usa para producción, una rama develop donde se mergea las nuevas features y varias ramas que usan semantic version para desarrollar las nuevas features.
Una vez se termina una feature, esta se mergea con develop y después develop se mergea con main