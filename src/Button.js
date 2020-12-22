import { withOptimizely } from "@optimizely/react-sdk"

function Button(props) {
  function onClick(event) {
    props.optimizely.track("clickColor")
  }

  return <button onClick={onClick}>Do the thing</button>
}

export default withOptimizely(Button)
