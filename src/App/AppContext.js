import React from 'react';

export default React.createContext({
    lyrics: [],
    current:"",
    addLyrics:()=>{},
    deleteLyrics: () => {},
    updateLyrics:()=>{}
})