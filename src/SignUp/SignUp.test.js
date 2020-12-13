import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'

describe("Database", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
                <SignUp />
            </Router>, div)
    })
})
