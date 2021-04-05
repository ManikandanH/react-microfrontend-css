import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundary'
import { Landing } from '../container/Landing'

const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/pricing" component={Pricing} />*/}
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App