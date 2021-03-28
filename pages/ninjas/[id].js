import React, { Component } from 'react'

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(ninja =>{
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const id = ctx.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)

    const data = await res.json();

    return{
        props : {
            ninja : data
        }
    }
}

export default class NinjaDetails extends Component {
    render() {
       // console.log(this.props);
        return (
            <div>
                <h1>{this.props.ninja.name}</h1>
                <p>{this.props.ninja.email}</p>
                <p>{this.props.ninja.website}</p>
                <p>{this.props.ninja.address.city}</p>
            </div>
        )
    }
}
