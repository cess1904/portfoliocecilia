import '../styles/components/Buttonabout.css'

function Button({ children, onClick }) {
  return (
    <button className="btn-about" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
