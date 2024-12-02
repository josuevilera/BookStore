import { FiMenu } from "react-icons/fi";

interface ButtonResponsiveProps {
    onOpen: () => void;
}

function ButtonResponsive({ onOpen }: ButtonResponsiveProps) {
    return (
        //botón con forma de hamburguesa (menú) para móvil
        <button
            className="md:hidden"
            onClick={onOpen}
        >
            <FiMenu className="w-8 h-8" />
        </button>
    );
}

export default ButtonResponsive;
