### DEV NOTES

#### Component Lifecycle
- Constructor(props)
- getDerivedStateFromProps(props, state)
- render()
- Render Child Components
- componentDidMount(): Do not update State here, it is bad for performance.


#### Component Update Lifecycle (For Props Changes)
- getDerivedStateFromProps(props, state):
  - DO: Sync State to Props
  - DONT: Cause Side-Effects
- shouldComponentUpdate(netxProps, nextState): 
  - DO: Decide whether to Continue or Not
  - DONT: Cause Side-Effects
- render:
  - Prepare & Structure your JSX Code.
- Update Child Components Props
- getSnapshotBeforeUpdate(prevProps, prevState):
  - DO: Last-minute DOM ops
  - DONT: Cause Side-Effects
- componentDidUpdate()
  - DO: Cause Side-Effects
  - DONT: Update State (triggers re-render)











