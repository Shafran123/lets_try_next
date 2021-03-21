import React, { Component } from 'react'
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFoundPage = () => {

    const router = useRouter();

        useEffect(() => {
           console.log('Effect');
           setTimeout(() => {
               router.push('/')
           }, 3000);
        }, [])

        return (
            <div className="not-found">
                <h1>Ooops..</h1>
                <h2>That Page cannot be found..</h2>
                <p>Go Back to the <Link href="/"><a>HomePage</a></Link></p>
                
            </div>
        )
    
}

export default NotFoundPage