import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Database from './Database'

describe("Database", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
                <Database />
            </Router>, div)
    })
})
