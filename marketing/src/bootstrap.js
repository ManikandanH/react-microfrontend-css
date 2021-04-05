import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const mount = el => {
    ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
    const node = document.getElementById("marketing-root")
    if (node) {
        mount(node)
    }
}

export { mount }