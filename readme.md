### Login

`POST `/api/login``

JSON
```
{
	"username": "String",
	"password": "String",
}
```
WILL RETURNED

```
{
    "status": "Logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFzZHNhZGEiLCJwYXNzd29yZCI6ImFzZGFzZGEiLCJpYXQiOjE1NjUyNTczMzYsImV4cCI6MTU2NTI1ODIzNn0.F534jUvLTMaZs6Ej0QaRR6XL_wfiUcxanarmD-jlfec",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFzZHNhZGEiLCJwYXNzd29yZCI6ImFzZGFzZGEiLCJpYXQiOjE1NjUyNTczMzYsImV4cCI6MTU2NTM0MzczNn0.GDWOZoIVitkL5aK_uGieRJoNLIdAZHXkx83ObCUUEeY"
}
```

`POST `/api/token``

JSON
```
{
	"username": "String",
	"password": "String",
	"refreshToken": "String"
}
```
WILL RETURNED
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFzZHNhZGEiLCJwYXNzd29yZCI6ImFzZGFzZGEiLCJpYXQiOjE1NjUyNTcxMTMsImV4cCI6MTU2NTI1ODAxM30.8Kgq5kWGxoEgjotnbyWy2HeiAbfsFejmf5pNYyZ229s"
}
```


### User

```
GET `/api/user`
POST `/api/user`
GET `/api/user/:id`
PUT `/api/user/:id`
PATCH `/api/user/:id`
DELETE `/api/user/:id`
```
JSON
```
{
	"username": "String",
	"email": "String",
	"password": "String",
	"country": "String",
	"state": "String",
	"city": "String",
	"userInfo": {
	    "preview": "String",
	    "firstname": "String",
	    "lastname": "String",
	    "status": "String",
	    "education": "String",
	    "job": "String",
	    "birthday": "String",
	    "isBlocked": "Boolean"
	}
}
```

**username, email, password, country**

### Post

```
GET `/api/post`
POST `/api/post`
GET `/api/post/:id`
PUT `/api/post/:id`
PATCH `/api/post/:id`
DELETE `/api/post/:id`
```
JSON
```
{
	"username": "String",
	"title": "String",
	"body": "String",
	"image": "String",
	"likes": "Number"
}
```
**username, body, likes**

### Comment

```
GET `/api/comment`
POST `/api/comment`
GET `/api/comment/:id`
PUT `/api/comment/:id`
PATCH `/api/comment/:id`
DELETE `/api/comment/:id`
```
JSON
```
{
	"postid": "String",
	"username": "String",
	"body": "String",
	"likes": "Number"
}
```
**postid, username, body, likes**