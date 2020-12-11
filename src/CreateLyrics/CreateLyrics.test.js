import { render, screen } from '@testing-library/react';
import CreateLyrics from './CreateLyrics';

const data = {
    title:'',
    lyrics:''
}

test('Create Lyrics Renders', () => {
    <CreateLyrics />
       expect(200)
 })

 test('title is blank',()=>{
     <CreateLyrics data = {data}/>
 })