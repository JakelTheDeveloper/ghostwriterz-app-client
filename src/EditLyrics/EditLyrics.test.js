import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { createMemoryHistory } from 'history'
import ReactDOM from 'react-dom'
import EditLyrics from './EditLyrics'
import AppContext from '../App/AppContext'
import lyricsStore from '../STORE'

Enzyme.configure({ adapter: new Adapter() })

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

let current = 1

describe("EditLyrics", () => {
    it("renders without crashing", () => {
        const contextValue = {
            lyrics: lyricsStore,
            currentUser: current,
        }
        const history = createMemoryHistory(`/lyrics/${user[0].id}`)
        const state = {
            key: 1,
            id: 1,
            title: "Hello",
            genre: "Hip Hop",
            mood: "Happy",
            artist: user[0].nickname,
            lyrics: "yoyoyoyoyo"
        }
        history.push('/', state)

        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
                <AppContext.Provider value={contextValue}>
                    <EditLyrics history={history} current={current} user={user} location={history.location} />
                </AppContext.Provider>
            </Router>, div)
    })
})

