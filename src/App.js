import "./App.css"

function App({ isOrange }) {
  let linkStyle = { fontSize: "72px", textDecoration: "none" }

  if (isOrange) {
    linkStyle.color = "orange"
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          style={linkStyle}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  )
}

export default App
