import { useState, useEffect } from "react";
import Register from "../components/Register";
import { FaComments } from 'react-icons/fa';


export default function SignUpPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
                <button
                    onClick={open}
                    aria-label="Sign Up"
                    className="
            fixed bottom-6 right-6 z-50
            w-14 h-14
            bg-purple-700 text-white
            rounded-full
            flex items-center justify-center
            shadow-lg
            hover:bg-purple-800
            focus:outline-none focus:ring-2 focus:ring-purple-300
            transition
          "
                >
                    <FaComments className="w-6 h-6" />
                </button>
        
            <Register isOpen={isOpen} onClose={close} />
        </>
    );
}