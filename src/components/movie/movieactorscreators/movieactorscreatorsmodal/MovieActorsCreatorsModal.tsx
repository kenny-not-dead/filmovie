import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const MovieActorsCreatorsModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalTop, setModalTop] = useState(40)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setModalTop(window.pageYOffset + 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div>
        <button onClick={handleOpenModal}>Trigger Modal</button>
      </div>
      {showModal &&
        createPortal(
          <div className="Modal" style={{ top: modalTop }}>
            <p>Modal text!</p>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>,
          document.getElementById('modal-root')!
        )}
    </>
  )
}
