import Header from "./Header";
import Footer from "./Footer";
import Item from "./Item";
import Navbar from "./Navbar";
import Home from "./Home";

const UserLayout = () => {
    return(
        <div className="UserLayout">
            <Header/>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}
export default UserLayout;