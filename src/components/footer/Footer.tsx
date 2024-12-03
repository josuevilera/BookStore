import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
function Footer() {
    return (
        <>
            <footer className="flex justify-center items-center space-x-6 w-full bg-emerald-300 h-20 fixed bottom-0 left-0 z-10">
                <FiFacebook className="w-6 h-6"></FiFacebook>
                <FiInstagram className="w-6 h-6"></FiInstagram>
                <FiTwitter className="w-6 h-6"></FiTwitter>
            </footer>
        </>
    );
}

export default Footer;