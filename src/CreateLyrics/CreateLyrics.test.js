import { render, screen } from '@testing-library/react'
import CreateLyrics from './CreateLyrics'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let user = [
        {
          id: 1,
          fullname: 'Foo',
          username: 'foo@gmail.com',
          nickname: 'DemoFoo',
          password: 'secret',
          date_created: '2029-01-22T16:28:32.615Z'
        },
    ]

describe("Create Lyrics", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
           <Router>
             <CreateLyrics user = {user}/>
             </Router>, div)
    })
 })