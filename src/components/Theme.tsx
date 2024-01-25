"use client"
import { useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const Theme = () => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
        document.querySelector("html")?.setAttribute("data-theme", theme ? 'white' : '');
    };

    return (
        <div className="cursor-pointer text-main400" onClick={toggleTheme}>
            {!theme ? <GoMoon /> : <GoSun />}
        </div>
    )
}

export default Theme;