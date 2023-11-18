import './Card.style.css';

export default function Card({ title, icon, children }) {
  return (
    <div className="card">
      <div className="headingWrapper">
        <span className='logoStyle' >{icon}</span>
        <h1 className="heading">{title}</h1>
      </div>
      {children}
    </div>

  )
}
