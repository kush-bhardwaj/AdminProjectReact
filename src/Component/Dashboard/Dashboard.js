import { Outlet } from "react-router-dom";
import DashBoardMenu from "./DashboardMenu";
import Main from "./DashboarLayout/Main/Main";

export default function Dashboard(){
    return(
        <>
        <Main>
            <div className="MainComponent">
                <div className="LeftSideBar">
                <DashBoardMenu />
                </div>
                
                <div className="RightSideBar">
                <Outlet />
                </div>
            </div>
            
        </Main>
        </>
    )
}