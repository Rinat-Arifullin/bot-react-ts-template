import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app"
import { useEffect } from "react";

function App() {
  const showPopup = useShowPopup()

  const handleClick = ()=> {
    showPopup({
      message: 'Hello, I am popup',
    });
  }

  useEffect(()=>{

  },[])

  return (
    <div>
      <MainButton text="SHOW POPUP" onClick={handleClick} />
    </div>
  )
}

export default App
