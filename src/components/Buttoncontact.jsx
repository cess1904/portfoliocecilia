import '../styles/components/Buttoncontact.css'

function Button({ children, onClick }) {
  return (
    <button className="btn-contact" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
