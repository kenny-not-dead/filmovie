import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const MovieActorsCreatorsModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root')!
    modalRoot.classList.add('Overlay')

    return () => {
      modalRoot.classList.remove('Overlay')
    }
  }, [])

  return (
    <div>
      <div>
        <button onClick={handleOpenModal}>Trigger Modal</button>
      </div>
      {showModal &&
        createPortal(
          <div className="Modal">
            <p>Modal text!</p>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>,
          document.getElementById('modal-root')!
        )}
    </div>
  )
}
