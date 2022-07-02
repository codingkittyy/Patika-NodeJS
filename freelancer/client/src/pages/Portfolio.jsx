import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import PModal from '../components/PModal'
import PortfolioContext from '../context/PortfolioContext'
import { Link } from 'react-router-dom'

function Portfolio() {
  const { getItems, data, removeItem } = useContext(PortfolioContext)
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState(null)
  console.log(modalData)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getItems()
  }, [])
  const handleDelete = (id) => {
    alert('Are you sure?')
    removeItem(id)
    window.location.reload()
  }
  console.log(data)
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center d-flex">
          {data?.map((info) => (
            <div key={info._id} className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto">
                <div
                  onClick={() => {
                    setShow(true)
                    setModalData(info)
                  }}
                  className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                >
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid d-flex"
                  src={require('../assets/img/portfolio/cabin.png')}
                />
              </div>
              <h3 className="mt-2 text-center">{info.title}</h3>
              <div className="d-flex justify-content-center">
                <Link
                  to={`/update/${info._id}`}
                  className="btn btn-warning text-white me-5"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(info._id)}
                  className="btn btn-danger text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PModal
        modalData={modalData}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
      />
    </section>
  )
}

export default Portfolio
