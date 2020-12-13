import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import UserProfile from './UserProfile'
import lyricsStore from '../STORE'


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


describe("Database", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
                <UserProfile user = {user} lyrics = {lyricsStore}/>
            </Router>, div)
    })
})
