## Next - Prisma

<img src="https://media.istockphoto.com/id/1588307510/photo/prism-separating-light-spectrum.webp?b=1&s=170667a&w=0&k=20&c=Nscl9aQcUGjZ73Ee2v231q3VPfbUzPtNt6LJhva_Kxc=" alt="Prisma" width="350" />

### Setup

`pnpm install prisma --save-dev`

`pnpx prisma init`

add URL

```JavaScript
    .env
    DATABASE_URL = 'postgresql://localhost...'
```

once schemas are made...

`prisma migrate dev --name init`

to re-migrate later
`pnpx migrate dev`

add client
`pnpm add @prisma/client`

to manually re-generated your client
`pnpx prisma generate`

---

_one to many relationship_

The userId field in Post, references the id field in User

```JavaScript
    User {
        posts Post[]
    }
    Post {
        author User @relation(fields: [userId], references: [id])
    }
```

_one-to-many relationship_

Add id (e.g. "WrittenPosts") for two or more references to the same table

```JavaScript
    User {
        writtenPosts Post[] @relation("WrittenPosts")
        favoritePosts Post[] @relation("FavoritePosts")
    }

    Post {
        author User @relation("WrittenPosts", fields: [authorId], references: [id])
        authorId String
        favoritedBy User? @relation("FavoritePosts", fields: [favoriteById], references: [id])
        favoritedById String?
    }
```

_many-to-many relationship_

```JavaScript
    Post {
        categories Category[]
    }
    Category {
        posts Post[]
    }
```

_one-to-one relationship_

```JavaScript
    User {
        preference Preference?
    }

    Preference {
        user User @relation(fields: [userId], references: [id])
        userId String @unique
    }
```

_where queries_

`in`
in: ["Sally", "James"]

`notIn`
notIn: ["Sally", "James"]

`lt`
lt: age: {lt: 20}

`gt`
gt: age: {gt: 20}

`contains`
email: {contains: "@"}

`startsWith`
name: {startsWith: "Ja"}
