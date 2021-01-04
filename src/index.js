import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { createInstance, OptimizelyProvider } from "@optimizely/react-sdk"

const optimizely = createInstance({
  sdkKey: "UrCiRWnyiX7AYTrSYVeeB",
})

ReactDOM.render(
  <React.StrictMode>
    <OptimizelyProvider
      optimizely={optimizely}
      timeout={500}
      user={{ id: String(Math.random()) }}
    >
      <App />
    </OptimizelyProvider>
  </React.StrictMode>,

  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
