import React, { Component } from 'react'
import styles from '../../styles/Ninjas.module.css'
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {
            ninjas: data
        }

    }
}

export default class index extends Component {

    // static async getStaticProps() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await res.json()
    //     return { 
    //             ninjas : data
    //     }
    //   }

    render() {
        console.log(this.props.ninjas);
        return (
            <div>
                <h1>
                    All Ninjas
                </h1>
                {this.props.ninjas.map(ninja => (
                    <div key={ninja.id}>
                        <a className={styles.single}> <h3>{ninja.name}</h3> </a>
                    </div>
                ))}
            </div>
        )
    }
}
