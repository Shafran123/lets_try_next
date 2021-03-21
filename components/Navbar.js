import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <Image src="/logo.png" width={77} height={77} />
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
            </nav>
        )
    }
}
