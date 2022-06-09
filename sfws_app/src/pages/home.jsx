import Key_points from '../components/key_points'
import Ten_hic from '../components/ten_hic'
import Cards from '../components/cards'
import Action_status from '../components/status'

import React from 'react'

function Home() {
    return (
        <div>
            <Key_points />
            <Ten_hic />
            <Action_status/>
            <Cards />
        </div>
    )
}

export default Home