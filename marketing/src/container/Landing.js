import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import './Landing.css'

export const Landing = props => {
    return (
        <div className="container">
            <div className="content-heading">
                <h1>Home Page</h1>
            </div>
            <div className="content-description">
                Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </div>
            <div className="button-container">
                <button className="button-1">
                    <Link href='/pricing' to='/pricing'>
                        Pricing
                    </Link>
                </button>
                <button className="button-2">
                    <Link href='/pricing' to='/pricing'>
                        Pricing
                    </Link>
                </button>
            </div>
            <div className="card-section">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                    <Card
                        key={index}
                        heading='Heading'
                        image='https://source.unsplash.com/random'
                        HeadingType='h2'
                        description='This is a media card. You can use this section to describe the content!'
                    />
                ))}
            </div>
        </div>
    )
}