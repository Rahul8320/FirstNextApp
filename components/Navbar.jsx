import React from 'react';
import Link from "next/link";

function Navbar() {
  return (
    <nav >
        <Link href="/">
            <a >Superhero Identity</a>
        </Link>
        <Link href="/new">
            <a >New Identity</a>
        </Link>
    </nav>
  )
}

export default Navbar;