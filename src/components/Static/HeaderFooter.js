import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AppBackground, AppFooter } from "../StyledComponents";

export default function HeaderFooter(props) {
    return( 
        <AppBackground>
            <br />
            <Header />
            <div style={{padding: 40}}>
                <Outlet />
            </div>
            <AppFooter > 
                <div style={{padding:"10px"}}>&copy; Fernanda Blaise 2022</div>
            </AppFooter>
        </AppBackground>
    );
}