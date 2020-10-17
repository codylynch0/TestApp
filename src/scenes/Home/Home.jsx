import React from 'react'
import Button from '../../components/Button/Button'
import ComplexCard from '../../components/ComplexCard/ComplexCard'


export const Home = ({text,setText}) => {
    return (
        <>
        <div>
            {text};
        </div>
        <button onClick={() => {setText('ildos')}}>Click Me!</button>
        <Button/>
        <ComplexCard/>
        </>
    )
}
// State and Props research
