import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = props => {
    const { type = 'default' } = props

    const normalCard = props => {
        const { image, heading, HeadingType = 'h2', description } = props
        return (
            <div className='card-container'>
                <div className="image-container">
                    <img src={image} />
                </div>
                <div className="heading-container">
                    <div className="content-heading">
                        <HeadingType>{heading}</HeadingType>
                    </div>
                    <div className="content-paragraph">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="button-section">
                    <button className="button-1">
                        <Link href="/" to="/">
                            View
                        </Link>
                    </button>
                    <button className="button-2">
                        <Link href="/" to="/">
                            Edit
                        </Link>
                    </button>
                </div>
            </div>
        )
    }

    const renderCard = (props) => {
        return {
            default: normalCard(props),
        }
    }
    return (
        <Fragment>
            {renderCard(props)[type]}
        </Fragment>
    )
}
