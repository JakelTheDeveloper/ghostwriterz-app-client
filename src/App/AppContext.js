import React from 'react';

export default React.createContext({
    lyrics: [],
    users: [],
    currentUser:Number,
    addLyrics:(id)=>{},
    deleteLyrics: () => {},
    updateLyrics:(id)=>{}
})