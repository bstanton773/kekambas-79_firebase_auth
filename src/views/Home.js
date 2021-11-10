import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="card mb-3">
                <img src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">Thanksgiving Firebase Project</h3>
                    <p className="card-text">Today we will set up Authentication and hosting with Google Firebase. You can find the documentation <a href='/'>here</a></p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        )
    }
}