import { useRef, useState } from "react";

import PhoneInput from 'react-phone-number-input'

import styles from './Form.module.css'
import 'react-phone-number-input/style.css'

function Form() {
  const [ showMessageInput, setShowMessageInput ] = useState(false)
  const [ phone, setPhone ] = useState()
  const messageRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanPhone = phone?.replace('+', '')
    const message = messageRef.current?.value.replaceAll(' ', '%20')
    const paramsURL = message ? `${cleanPhone}?text=${message}` : cleanPhone

    window.location.href = `https://wa.me/${paramsURL}`
  }

  return <>
    <form onSubmit={handleSubmit} className={styles.form}>
      <PhoneInput
        required
        id="phone-number"
        placeholder="Enter phone number"
        phone={phone}
        onChange={setPhone}
      />
      <div>
        <input id="message-checkbox" type="checkbox" onChange={() => {setShowMessageInput(!showMessageInput)}} className={styles.checkbox} />
        <label htmlFor="message-checkbox">Do you want to add a message?</label>
      </div>
      {showMessageInput
        &&
        <>
          <textarea ref={messageRef} id="message" type="text" className={styles.textarea} cols={30} rows={5} />
        </>}
      <button type="submit" className={styles.ctaBtn}>Text now</button>
    </form>
  </>;
}

export default Form;
