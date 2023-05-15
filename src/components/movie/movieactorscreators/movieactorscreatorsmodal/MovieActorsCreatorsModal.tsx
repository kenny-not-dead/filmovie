import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import classes from './MovieActorsCreatorsModal.module.scss'

export const MovieActorsCreatorsModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalTop, setModalTop] = useState(40)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleScroll = () => {
    const buttonHeight = 88 // Update with the actual button height
    setModalTop(window.pageYOffset + buttonHeight + 40)
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
        <button className={classes.modalTriggerBtn} onClick={handleOpenModal}>
          Еще
        </button>
      </div>
      {showModal &&
        createPortal(
          <div className={classes.modal} style={{ top: modalTop }}>
            <button onClick={handleCloseModal}>К фильму</button>
            <p>Modal text!</p>
          </div>,
          document.getElementById('modal-root')!
        )}
    </>
  )
}
