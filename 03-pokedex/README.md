<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#Ejectutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```
3. Tener NEST CLI instalado

```
npme i -g @nestjs/cli
```
4. Levantar la base de datos

```
docker-compose up -d
```
## Stack usado

* MongoDb
* Nestjs

## Conexion nestjs - mongo

```
https://docs.nestjs.com/techniques/mongodb
```
5. Instalamos dependencias.

```
@nestjs/mongoose mongoose
```
6. Modificamos el archivo app.Module.ts
Agregaremos la siguiente lienea,
```
MongooseModule.forRoot('mongodb://localhost:27017/<nombre de la Bd que colocamos en el docker-compose.yaml >)
```
Quedando de la siguiente manera.
```
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
      MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule
  ],
})
export class AppModule {}
```