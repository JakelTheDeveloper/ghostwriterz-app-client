import React from 'react';

export default React.createContext({
    lyrics: [],
    user: [],
    currentUser:Number,
    addLyrics:(id)=>{},
    deleteLyrics: () => {},
    updateLyrics:(id)=>{}
})