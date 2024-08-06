import { Link } from "react-router-dom"

// import { FaAngleRight } from "react-icons/fa";
export default function DashBoardMenu() {
    const Menu = [
        { list: "dashboard", url: "dashboardgraph" },
        { list: "category", url: "category" },
        { list: "subcategory", url: "subcategory" },
        { list: "customerdetails", url: "customerdetails" },
        { list: "userlist", url: "userlist" },
        { list: "orders", url: "orders" },
        { list: "products", url: "products" },
        { list: "mangement", url: "mangement" },        
        { list: "slider", url: "slider" },
        { list: "notification", url: "notification" },
    
    ]

    return (
        <>
            <div className="DashboardMenu">
                <ul>
                    {Menu.map((e, pos) => 
                    <li key={pos} >
                        <Link to={e.url}>{e.list}</Link>
                        </li>)}
                </ul>
            </div>

        </>
    )
}
