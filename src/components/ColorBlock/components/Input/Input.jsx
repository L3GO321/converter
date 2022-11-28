import { useState } from "react";
import styles from './styles.module.css'

export const Input = ({ onChange }) => {
  const [value, setValue] = useState('#ffffff')

  const onChangeValue = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <input className={styles.input} value={value} onChange={onChangeValue} />
  )
}