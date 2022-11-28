import { useState } from "react";
import { Input, RgbBlock } from "./components";
import styles from './styles.module.css'

const colorReg = /^#([a-f\d]{6})$/

export const ColorBlock = ({ hex }) => {
  const [hexColor, setHexColor] = useState('#ffffff')

  const onChange = (value) => {
    if (value.length >= 7) {
      setHexColor(value)
    }
  }

  return (
    <div className={styles.wrapper} style={{ backgroundColor: colorReg.test(hexColor) ? hexColor : 'red' }}>
      <Input onChange={onChange} />
      <RgbBlock hexColor={hexColor} reg={colorReg} />
      {/* {arrayColor ? parseInt(arrayColor[1], 16)}, {parseInt(arrayColor[2], 16)}, {parseInt(arrayColor[3], 16) : null} */}
    </div>
  )
}