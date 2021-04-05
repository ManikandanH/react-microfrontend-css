import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state = {
        error: false,
        errorInfo: '',
    }


    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true,
            errorInfo
        })
    }

    render() {
        const { children } = this.props
        const { error, errorInfo } = this.state
        if (error) {
            return (
                <div>
                    <div>
                        <p>
                            There was an error in loading this page.
                            <span
                                style={{ cursor: 'pointer', color: '#0077FF' }}
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Reload this page
          </span>
                        </p>
                    </div>
                    <div>
                        <details>
                            <summary>Click for error details</summary>
                            {errorInfo && errorInfo.componentStack.toString()}
                        </details>
                    </div>
                </div>
            );
        }
        return children
    }
}