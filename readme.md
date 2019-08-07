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
	"city": "String"
}
```

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
	"username": "String*",
	"title": "String",
	"body": "String*",
	"image": "String",
	"likes": "Number*"
}
```
