export default function CodeBlock({ children, language = 'bash' }) {
  return (
    <pre className={`code-block language-${language}`}>
      <code>{children}</code>
    </pre>
  )
}
