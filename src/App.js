import "./App.css"

import { OptimizelyFeature, withOptimizely } from "@optimizely/react-sdk"

function Button(props) {
  function onClick(event) {
    props.optimizely.track("clickColor")
  }

  return <button onClick={onClick}>Do the thing</button>
}

const WrappedButton = withOptimizely(Button)

function App({ isOrange }) {
  let linkStyle = { fontSize: "72px", textDecoration: "none" }
  let linkStyleOrange = {
    fontSize: "72px",
    textDecoration: "none",
    color: "orange",
  }

  return (
    <div className="App">
      <header className="App-header">
        <OptimizelyFeature feature="link_color">
          {(isEnabled, variables) => {
            let isOrange = variables.isOrange
            return (
              <a
                className="App-link"
                style={isOrange ? linkStyleOrange : linkStyle}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            )
          }}
        </OptimizelyFeature>
        <WrappedButton />
      </header>
    </div>
  )
}

export default App
