import { useState } from "react";

function Form() {
  const [ showMessageInput, setShowMessageInput ] = useState(false)

  return <form>
    <label htmlFor="phone-number">Phone</label>
    <input id="phone-number" type="number" />
    <input type="checkbox" onChange={() => {setShowMessageInput(!showMessageInput)}} />
    {showMessageInput
      &&
      <>
        <label htmlFor="message">Message</label>
        <textarea id="message" type="text" />
      </>}

  </form>;
}

export default Form;
