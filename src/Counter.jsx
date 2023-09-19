import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function increment(x){
        setCount(count => count +1)
        console.log(count)
    }

    return (
      <>
        <div clasName="counter">
            <button onClick={()=> increment(1)} >+</button>
            <button onClick={()=> increment(-1)} >-</button>
            <p>{count}</p>
        </div>
      </>
    )
  }

export default Counter