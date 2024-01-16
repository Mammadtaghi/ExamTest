import React from 'react'
import style from "./index.module.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from '../../Components/Product'

function DetailPage() {

  const { id } = useParams()

  const [Pro, setPro] = React.useState(null)

  const [isLoading, setIsLoading] = React.useState(true)

  async function GetProduct(id) {
    try {
      const res = await axios.get(`http://localhost:3000/pro/${id}`).then(re => re.data)
      setPro(res)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    GetProduct(id)
  }, [])


  return (
    <main id={style.Detail}>
      {isLoading
        ?
        <span className={style.loader}></span>
        :
        <Product props={Pro} />
      }
    </main>
  )
}

export default DetailPage