import React, {useState} from 'react'

function Input() {
    const [valeurInput, setValeurInput] = useState('');

    function handleInputChange (e) {
        setValeurInput(e.target.value);
      };
    return (
      <>
      <div>
        <input type="text" value={valeurInput}
        onChange={handleInputChange} />
        
        <p> {valeurInput}</p>
      </div>
  
      </>
    )
  }
  
  export default Input