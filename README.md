# GhostWriterz

#### *[LIVE APP](https://ghostwriterz-app-d4kure3ts.vercel.app/)*

## API Documentation

### Description

This api allows you to use CRUD operations for sharing your song lyrics around the world for others to use. Within this documentation, you'll find out how to start creating and posting your own personal song lyrics to the Ghostwriterz database.

#### Version

-1.0.0

## Servers

-url: morning-tundra-70520.herokuapp.com/api/lyrics

-description:

 ``` method: GET ```

-url: morning-tundra-70520.herokuapp.com/api/lyrics

-description: 

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

-url: morning-tundra-70520.herokuapp.com/api/lyrics/lyric_id

-description: 

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
               
