import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./UserLayout";
import "./App.css";

const App = () => {
    return(
        /*<div className="App">
            <UserLayout/>
        </div>*/
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLayout />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;