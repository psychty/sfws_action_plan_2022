import Key_points from '../components/key_points'
import Ten_hic from '../components/ten_hic'
import Cards from '../components/overall_action_cards'
import Progress_component from '../components/progress'

import React from 'react'

function Home() {
    return (
        <div>

            <Key_points />
            <Ten_hic />
            <p>You can also look at just those actions which are complete or in progress using the icons below.</p>
            <Progress_component/>
            <Cards />
        </div>
    )
}

export default Home