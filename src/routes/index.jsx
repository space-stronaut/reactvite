import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}