import React from 'react';

export default React.createContext({
    lyrics: [],
    current:1,
    addLyrics:(id)=>{},
    deleteLyrics: () => {},
    updateLyrics:(id)=>{},
})