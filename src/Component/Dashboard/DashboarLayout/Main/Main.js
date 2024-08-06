import './Main.css'; // Import CSS file at the top
import AdminHeader from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileHeader from '../Header/MobileHeader';

export default function Main({children}) {
    return (
        <>
           
            <AdminHeader />
           <MobileHeader />
                {children}
            {/* <Footer /> */}
        </>
    );
}
