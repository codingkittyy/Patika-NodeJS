import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PortfolioContext from '../context/PortfolioContext'

function Add() {
  const { userInfo, setUserInfo, createItems } = useContext(PortfolioContext)
  const [file, setFile] = useState('')
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const navigate = useNavigate()
  const onSubmit = (e) => {
    navigate('/')
  }

  return (
    <section className="mt-5 page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Add Portfolio Item
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
              id="contactForm"
              encType="multipart/form-data"
              onSubmit={onSubmit}
            >
              <div className=" mb-3">
                <input
                  onChange={(e) => setUserInfo({ image: e.target.files[0] })}
                  className="form-control"
                  id="image"
                  type="file"
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                />
              </div>
              <div className=" mb-3">
                <input
                  className="form-control "
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className=" mb-3">
                <textarea
                  className="form-control"
                  id="desc"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: '10rem' }}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="btn btn-primary btn-xl "
                id="submitButton"
                type="submit"
                onClick={createItems}
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Add
