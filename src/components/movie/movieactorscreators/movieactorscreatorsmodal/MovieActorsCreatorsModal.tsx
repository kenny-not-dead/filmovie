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
            <p>Modal text!</p>
            <button onClick={handleCloseModal}>К фильму</button>
          </div>,
          document.getElementById('modal-root')!
        )}
    </>
  )
}
