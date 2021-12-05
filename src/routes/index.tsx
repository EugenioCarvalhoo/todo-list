import { BrowserRouter, Route,  } from "react-router-dom";
import App from "../App";



const Routes = () => {
    return (
        <BrowserRouter>
            <Route>
                <Route path="/">
                    <App />
                </Route>
            </Route>
        </BrowserRouter>
    );
}