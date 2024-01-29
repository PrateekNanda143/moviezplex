# Project: moviezpleax

## End-point: Add Movies

Adding movies

### Method: POST

> ```
> http://localhost:8001/moviezplex/movies/add
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "title": "MI20",
  "genre": "Action",
  "rating": "5Star",
  "link": "http://localhost:8009/auth/register",
  "role": "admin"
}
```

### Response: 400

```json
{
  "error": "\"role\" is required"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Fetch Movies

Fetch all the movies

### Method: GET

> ```
> http://localhost:8001/moviezplex/movies
> ```

### Response: 200

```json
[
  {
    "_id": "65b55f58b0303f84b6c671fc",
    "title": "RED",
    "genre": "Comedy",
    "rating": "5Star",
    "link": "http://localhost:8001/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5d0dcd6bb512fe646c355",
    "title": "MI",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8002/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5d106d1ee2f258d4db1b3",
    "title": "MI1",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8003/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5e1fe8d13c4069f369608",
    "title": "MI3",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8005/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5e22d225f064bf5368ce0",
    "title": "MI4",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8006/auth/register",
    "__v": 0
  },
  {
    "_id": "65b654263c28d4c39ca4c424",
    "title": "MI5",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8007/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69d6671b345c4a7d02f98",
    "title": "MI9",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69d9d71b345c4a7d02f9a",
    "title": "MI10",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69ec05f778f748df57213",
    "title": "MI11",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8008/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69ed25f778f748df57215",
    "title": "MI11",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a259eb7d24f4b55884c7",
    "title": "MI12",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a2bdc66c305a893bd1cd",
    "title": "MI13",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a59fd6f88a497de58f87",
    "title": "MI14",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a5ff38298238d5393f8e",
    "title": "MI15",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a678a8bd4182aee25821",
    "title": "MI16",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a816510dcdee025a4747",
    "title": "MI17",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a83e51901eb3982be920",
    "title": "MI17",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a84451901eb3982be922",
    "title": "MI19",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a898fe9b223b0de952de",
    "title": "MI20",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6b3f34ebb33cc1fbce93e",
    "title": "MI21",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6bd72ea4c2e4af8947652",
    "title": "MI23",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6bdf7cb8004599c116a48",
    "title": "MI24",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Search Movies

Search by query

### Method: GET

> ```
> http://localhost:8001/moviezplex/movies/search?genre=Action
> ```

### Query Params

| Param | value  |
| ----- | ------ |
| genre | Action |

### Response: 200

````json
[
  {
    "_id": "65b5d0dcd6bb512fe646c355",
    "title": "MI",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8002/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5d106d1ee2f258d4db1b3",
    "title": "MI1",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8003/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5e1fe8d13c4069f369608",
    "title": "MI3",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8005/auth/register",
    "__v": 0
  },
  {
    "_id": "65b5e22d225f064bf5368ce0",
    "title": "MI4",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8006/auth/register",
    "__v": 0
  },
  {
    "_id": "65b654263c28d4c39ca4c424",
    "title": "MI5",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8007/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69d6671b345c4a7d02f98",
    "title": "MI9",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69d9d71b345c4a7d02f9a",
    "title": "MI10",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69ec05f778f748df57213",
    "title": "MI11",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8008/auth/register",
    "__v": 0
  },
  {
    "_id": "65b69ed25f778f748df57215",
    "title": "MI11",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a259eb7d24f4b55884c7",
    "title": "MI12",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a2bdc66c305a893bd1cd",
    "title": "MI13",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a59fd6f88a497de58f87",
    "title": "MI14",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a5ff38298238d5393f8e",
    "title": "MI15",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a678a8bd4182aee25821",
    "title": "MI16",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a816510dcdee025a4747",
    "title": "MI17",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a83e51901eb3982be920",
    "title": "MI17",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a84451901eb3982be922",
    "title": "MI19",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  },
  {
    "_id": "65b6a898fe9b223b0de952de",
    "title": "MI20",
    "genre": "Action",
    "rating": "5Star",
    "link": "http://localhost:8009/auth/register",
    "__v": 0
  }
]

Search by query

### Method: GET

> ```
> http://localhost:8001/moviezplex/movies/search?title=RED
> ```

### Query Params

| Param | value  |
| ----- | ------ |
| title | RED |

````

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Movie

### Method: PUT

> ```
> http://localhost:8001/moviezplex/movies/65b69ec05f778f748df57213
> ```

### Body (**raw**)

```json
{
  "title": "MI11",
  "genre": "Action",
  "rating": "5Star",
  "link": "http://localhost:8008/auth/register",
  "role": "admin"
}
```

### Response: 200

```json
{
  "_id": "65b69ec05f778f748df57213",
  "title": "MI10",
  "genre": "Action",
  "rating": "5Star",
  "link": "http://localhost:8009/auth/register",
  "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete By Id

### Method: DELETE

> ```
> http://localhost:8001/moviezplex/movies/65b6a5425a2c877936c05842
> ```

### Body (**raw**)

```json
{ "role": "admin" }
```

### Response: 400

```json
{
  "_id": "65b6a5425a2c877936c05842",
  "title": "MI13",
  "genre": "Action",
  "rating": "5Star",
  "link": "http://localhost:8009/auth/register",
  "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---
