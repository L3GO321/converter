import styles from './styles.module.css'

export const RgbBlock = ({ hexColor, reg }) => {
  const convertToRgb = (hex) => {
    return `rgb(${parseInt(hex.substring(1, 3), 16)}, ${parseInt(hex.substring(3, 5), 16)}, ${parseInt(hex.substring(5), 16)})`
  }

  return (
    <div className={styles.wrapper}
    >
      {reg.test(hexColor) ? convertToRgb(hexColor) : 'Ошибка!'}
    </div>
  )
}