import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = () => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
        document.querySelector("html")?.setAttribute("data-theme", theme ? 'white' : '');
    };

    return (
        <div className="cursor-pointer" onClick={toggleTheme}>
            {!theme ? <FaMoon /> : <FaSun />}
        </div>
    )
}

export default Theme;