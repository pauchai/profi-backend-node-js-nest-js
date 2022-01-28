npm i -g @nestjs/cli
nest new nest-course

npm run start:dev

simple controller

npm install --save @nestjs/sequelize sequelize sequelize-typescript
npm install --save pg pg-hstore
npm install --save-dev @types/sequelize
nest generate module users
nest generate controller users
nest generate service users

npm i @nestjs/config

npm i cross-env

npm i @nestjs/swagger swagger-ui-express

nest generate module roles
nest generate controller roles
nest generate service roles

npm i @nestjs/jwt bcryptjs
npm i --save-dev @types/bcryptjs
nest generate module auth
nest generate controller auth
nest generate service auth

npm i class-validator class-transform
validation for createUser 