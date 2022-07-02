import { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

const PortfolioContext = createContext()

const API_ENDPOINT = 'http://localhost:3001/api/portfolios'

const initialState = {
  title: '',
  desc: '',
  image: '',
}

export const PortfolioContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [item, setItem] = useState([])
  const [userInfo, setUserInfo] = useState(initialState)
  const [singleItem, setSingleItem] = useState({})

  const form = new FormData()
  form.append('title', userInfo.title)
  form.append('desc', userInfo.desc)
  form.append('image', userInfo.image)

  const createItems = async (e) => {
    const data = new FormData()
    data.append('file', userInfo.image)
    data.append('upload_preset', 'upload')
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/ddypy0k6k/image/upload',
        data
      )
      const { url } = uploadRes.data

      const newInfo = {
        ...userInfo,
        image: url,
      }
      await axios.post(API_ENDPOINT, newInfo)
    } catch (error) {
      console.log(error)
    }
  }

  const getItems = async () => {
    const res = await axios.get(API_ENDPOINT)
    const result = await res.data
    setData(result)
  }

  const getItem = async (id) => {
    const res = await axios.get(`${API_ENDPOINT}/${id}`)
    const result = await res.data
    setSingleItem(result)
  }

  const updateItem = async (id) => {
    await axios.put(`http://localhost:3001/api/portfolios/${id}`, userInfo)
  }

  const removeItem = async (id) => {
    await axios.delete(`${API_ENDPOINT}/${id}`)
  }

  return (
    <PortfolioContext.Provider
      value={{
        createItems,
        updateItem,
        data,
        setData,
        userInfo,
        setUserInfo,
        getItems,
        getItem,
        singleItem,
        setSingleItem,
        removeItem,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContext
