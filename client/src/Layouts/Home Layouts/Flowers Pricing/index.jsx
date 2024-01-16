import React from 'react'
import style from "./index.module.scss"
import { usePro } from '../../../Context/proContext'
import Product from '../../../Components/Product'

function FlowerPricing() {

    const { Pro } = usePro()

    return (
        <section id={style.FlowerPricing}>
            <h3 className={style.subTitle}>Devoted to wonderful beauty</h3>
            <h1 className={style.title}>Flowers Pricing</h1>
            <div className={style.grid}>
                {Pro && Pro.map((item, i) => (
                    <div key={item._id} style={{ gridArea: `grid${i + 1}` }} className={style.productContainer}>
                        <Product
                            props={item}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FlowerPricing