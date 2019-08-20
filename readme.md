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
POST `/api/refresh/:refreshToken`
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
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Revoked

```
POST `/api//revoke/:refreshToken`
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
GET `/api/user-posts/:id`
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

Body of Patch request for user`s data:
JSON

```
 {
	"country": "String",
	"state": "String",
	"city": "String",
	"preview": "String",
	"firstname": "String",
	"lastname": "String",
	"status": "String",
	"education": "String",
	"job": "String",
	"birthday": "String",
	"isBlocked": "Boolean"
}

```

### Post

```
GET `/api/post`
POST `/api/post`
POST '/api/user-posts'
GET `/api/post/:id`
GET `/api/post-comments/:id`
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
	"likes": "Number",
	"commentsNumber": "Number"
	"firstname": "String",
	    "lastname": "String",
}
```

**username, body, likes, commentsNumber**

### Comment

```
GET `/api/comment`
POST `/api/comment`
POST '/post-commetns'
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
	"firstname": "String",
	    "lastname": "String",
}
```

**username, body, postid**

### Like

```
POST `/api/like`
```

JSON

```
{
    "post_id": "String",
	"username": "String",
	"is_liked": "Boolean",
	"firstname": "String",
    "lastname": "String",
}
```

**post_id, username**
