export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title grid-container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="lead">{description}</p>}
    </div>
  )
}
