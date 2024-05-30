import React, { useState } from "react";
import Logo from "../assets/logo.svg"
import { Link } from "@inertiajs/react";


function Header() {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    const closeDropdown = () => setShow(false);

    return (
        <nav>
            <div ><Link href="/"><img  src={Logo}></img></Link></div>
            <div><Link href="/blog">Блог</Link></div>
            <div><Link href="/about">Про нас</Link></div>
            <div><Link href="catalog">Каталог</Link></div>
           
        </nav>
    )
}

export default Header;