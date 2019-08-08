### Login
```
POST `/api/login`
```
JSON
```
{
	"username": "String",
	"password": "String",
}
```
return

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
### Refresh
```
POST `/refresh/:refreshToken`
```

JSON
```
{
    "refreshToken": "String"
}
```
return
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Revoked
```
POST `/revoke/:refreshToken`
```

JSON
```
{
    "refreshToken": "String"
}
```
return
```
{
    "status": "revoked"
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