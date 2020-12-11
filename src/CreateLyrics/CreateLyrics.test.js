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

 test(`handleSubmit() returns 'missing title when missing title' `,()=>{
        return CreateLyrics.handleSubmit(data)
            .then(actual => {
                expect(actual).to.eql("Title must not be blank!")
            })
 })