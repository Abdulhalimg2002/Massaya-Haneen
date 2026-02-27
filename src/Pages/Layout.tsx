import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { VideoAudioProvider } from "@/components/ui/VideoAudioContext";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <VideoAudioProvider>
        <Navbar/>
        <main className="p-4 ">
            <Outlet />
        </main>
        <Footer/>
        </VideoAudioProvider>
        </>
        
    )
}
export default Layout;