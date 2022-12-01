import style from '../styles/Spinner.module.css'

export default function Spinner() {
  return (
    <div className={style.spinner_container}>
      <div className={style.spinner_border} role='status'></div>
    </div>
  )
}
