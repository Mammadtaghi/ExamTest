import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import style from "./index.module.scss";
import axios from 'axios';
import { usePro } from '../../Context/proContext';

function Add() {

  const [search, setSearch] = useState("")

  const [sort, setSort] = useState(null)

  const { Pro, GetPros, isLoading } = usePro()

  async function Post(data) {
    try {
      const res = await axios({
        method: 'post',
        url: "http://localhost:3000/pro",
        data: data
      }).then(re => re.data)
      console.log(res);
      GetPros()
    } catch (error) {
      console.log(error);
    }
  }


  async function handleDelte(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/pro/${id}`).then(re => re.data)
      console.log(res);
      GetPros()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Helmet>
        <title>Add</title>
        <link rel="shortcut icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VjQF4ZjCQrpTZxMCo-PdFgHaHa%26pid%3DApi&f=1&ipt=4abfa98c4780c78361e8c9cdfadf1177d5e953b63126097f1c5f91b15243c23d&ipo=images" type="image/x-icon" />
      </Helmet>
      <main id={style.Add}>
        <section id={style.FormSection}>
          <Formik
            initialValues={{ title: '', image: '', price: '' }}
            validationSchema={Yup.object({
              title: Yup.string().required('Required'),
              image: Yup.string().required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              Post(values)
              resetForm()
            }}
          >
            <Form className={style.Form}>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />

              <Field name="image" type="text" />
              <ErrorMessage name="image" />

              <Field name="price" type="number" min={0} />
              <ErrorMessage name="price" />

              <button type="submit">Add</button>
            </Form>
          </Formik>
        </section>

        <section id={style.Products}>
          <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setSort({ property: "title", asc: true })}>a-z</button>
            <button onClick={() => setSort({ property: "title", asc: false })}>z-a</button>
            <button onClick={() => setSort(null)}>default</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <span className={style.loader}></span> : Pro && Pro
                .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => {
                  if (sort && sort.asc) {
                    return a[sort.property] < b[sort.property] ? -1 : b[sort.property] < a[sort.property] ? 1 : 0
                  } else if (sort && sort.asc === false) {
                    return a[sort.property] > b[sort.property] ? -1 : b[sort.property] > a[sort.property] ? 1 : 0
                  } else {
                    return 0
                  }
                })
                .map(item => (
                  <tr key={item._id}>
                    <td><div id={style.imageBox}><img src={item.image} /></div></td>
                    <td><h3>{item.title}</h3></td>
                    <td><span>{item.price}</span></td>
                    <td><button onClick={() => handleDelte(item._id)}>Delete</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default Add