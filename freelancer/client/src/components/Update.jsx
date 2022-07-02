import axios from 'axios'
import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PortfolioContext from '../context/PortfolioContext'

function Update() {
  const {
    getItem,
    userInfo,
    updateItem,
    setSingleItem,
    singleItem,
    setUserInfo,
  } = useContext(PortfolioContext)

  const { id } = useParams()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    setSingleItem((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  console.log(userInfo)

  useEffect(() => {
    getItem(id)
  }, [id])

  console.log(singleItem)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <section className="mt-5 page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Edit Portfolio Item
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              encType="multipart/form-data"
            >
              <div className=" mb-3">
                <input
                  className="form-control "
                  id="title"
                  type="text"
                  value={singleItem.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" mb-3">
                <textarea
                  className="form-control"
                  id="desc"
                  type="text"
                  style={{ height: '10rem' }}
                  onChange={handleChange}
                  value={singleItem.desc}
                >
                  {singleItem.desc}
                </textarea>
              </div>
              <button
                className="btn btn-primary btn-xl "
                id="submitButton"
                type="submit"
                onClick={() => updateItem(id)}
                required
              >
                Update Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Update
