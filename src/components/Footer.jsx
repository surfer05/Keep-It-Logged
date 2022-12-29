import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
    return <footer>
        <p>&copy;Surfer_05 {currentYear}</p>
    </footer>
}
export default Footer;