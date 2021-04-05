import { mount } from 'marketing/marketingIndex';
import React, { useRef, useEffect } from 'react';

export const IntegrateComponent = () => {
    const divRef = useRef()

    useEffect(() => {
        mount(divRef.current)
    }, [])

    return <div ref={divRef} />
}