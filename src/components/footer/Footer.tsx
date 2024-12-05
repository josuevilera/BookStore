import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { useDarkMode } from "../../context/useDarkMode";
function Footer() {
    const { isDarkMode } = useDarkMode();
    return (
        <>
            <footer className={`flex justify-center items-center space-x-6 w-full h-20 fixed bottom-0 left-0 z-10 ${isDarkMode
                    ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white" 
                    : "bg-gradient-to-l from-indigo-100 via-pink-100 to-yellow-100 text-gray-900"
            }`}>
                <FiFacebook className="w-6 h-6"></FiFacebook>
                <FiInstagram className="w-6 h-6"></FiInstagram>
                <FiTwitter className="w-6 h-6"></FiTwitter>
            </footer>
        </>
    );
}

export default Footer;