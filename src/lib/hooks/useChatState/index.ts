import { useState } from 'react'

const useChatState = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openChat = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }
  const closeChat = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return { isOpen, openChat, closeChat }
}

export default useChatState
