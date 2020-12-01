# GhostWriterz

#### *[LIVE APP](https://ghostwriterz-app-d4kure3ts.vercel.app/)*

----------------------------------------------------------------------

## User Stories

* As a user:

    * I can view demo account

    * I can Register/Login/Logout

    * I can create, update, edit, and delete lyrics

    * I can view other lyrics in the database

## Stack Used

* Javascript(React)

* HTML5

* CSS

* NodeJs(Express)

* PostgreSQL



## API Documentation

### Description

This api allows you to use CRUD operations for sharing your song lyrics around the world for others to use. Within this documentation, you'll find out how to start creating and posting your own personal song lyrics to the Ghostwriterz database.

#### Version

-1.0.0

## Servers

### Lyrics Server

#### URL: 

morning-tundra-70520.herokuapp.com/api/lyrics

#### DESCRIPTION:

 ``` method: GET ```

#### URL: 

morning-tundra-70520.herokuapp.com/api/lyrics

#### DESCRIPTION: 

```                
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        genre: genre,
                        mood: mood,
                        artist: artist,
                        lyrics: lyrics
                    }),
                    headers: { 'Content-Type': 'application/json' }

                    expect(201)
```      

#### URL:

morning-tundra-70520.herokuapp.com/api/lyrics/lyric_id

#### DESCRIPTION: 

```
            method: 'PATCH',
            body: JSON.stringify({
                id: id,
                title: title,
                genre: genre,
                mood: mood,
                artist: artist,
                lyrics: lyrics
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

            expect(201)
```

#### URL: 

morning-tundra-70520.herokuapp.com/api/lyrics/lyric_id

#### DESCRIPTION: 

```
            method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })

            expect(204)
```

### Users Server

#### URL: 

morning-tundra-70520.herokuapp.com/api/users

#### DESCRIPTION: REGISTER

```
           method: 'POST',
            body: JSON.stringify({
            fullname:fullname,
            username:email,
            nickname:username,
            password:password,
            passwordConfirm:password_confirm
            }),
            headers: {
              'content-type': 'application/json',
            }
         })

            expect(201)
```

#### URL: 

morning-tundra-70520.herokuapp.com/api/auth/signin

#### DESCRIPTION: LOGIN

```
           method:'POST',
            body: JSON.stringify({
            username:username,
            password:password
            }),
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            }
          })

            expect(204)
```
               
