import React, { useEffect, useState } from 'react';
import './App.scss';

import { LandingPageComponent } from './components/LandingPageComponent';
import { TextComponent } from './components/TextComponent'

function App() {
  const [isVisable, setIsVisable] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    if (textComp && header && textComp.top < header.bottom && !isVisable) {
      return setIsVisable(true)
    } else if (textComp && header && textComp.top > header.bottom && isVisable) {
      setIsVisable(false)
    }
  }, [scroll])

  const textComp = document.getElementById("textComponent")?.getBoundingClientRect()
  const header = document.getElementById("name")?.getBoundingClientRect()

  let myClass = isVisable ? "textComponent visable" : "textComponent"

  window.onscroll = () => { setScroll(prev => prev + 1) }

  return (
    <div className="App">
      <LandingPageComponent textIsVisable={isVisable} />
      <TextComponent />
    </div>
  );
}

export default App;
