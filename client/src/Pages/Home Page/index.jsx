import React from 'react'
import style from "./index.module.scss"
import FlowerPricing from '../../Layouts/Home Layouts/Flowers Pricing'
import { Helmet } from 'react-helmet-async'

function Home() {


    return (
        <>
            <Helmet>
                <title>Home</title>
                <link rel="shortcut icon" href="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b2.jpg" type="image/x-icon" />
            </Helmet>
            <main id={style.Home}>
                <FlowerPricing />
            </main>
        </>
    )
}

export default Home