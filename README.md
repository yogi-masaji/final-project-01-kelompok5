# reflection-api
**Instalation**

 - rubah config di `config/config.json dan config/connection.js` bagian development (sesuaikan username, password, dll). database name pada config.json adalah database name yang akan dibuat, sedangkan yang di connection.js adalah database yang akan dipakai.
 - `npm install`
 - `npx sequelize db:create`
 - `npx sequelize db:migrate`
 - `npm run dev`
 
 **API EndPoint**
 - POST `/api/v1/users/register`
 request body {email,password}
 response body {token}
 - POST `/api/v1/users/login`
request body {email,password}
response body {token}
- GET `/test` testing authMiddleware
request header Bearer Token
response email

