import React from 'react';
import theme from 'utilities/theme'
import GlobalContext from 'Contexts/Global'

import { Highlight as H } from 'Components/Styles'

const ProgressBar = ({ currentTime, duration }) => {
  const width = 90
  const [elapsed, setElapsed] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const context = React.useContext(GlobalContext)

  // When context.currentTime updates:
  // Calculate and set the elapsed value to as a single unit of the total width
  React.useLayoutEffect(() => {
    setElapsed(Math.floor(currentTime*width/duration))
  }, [currentTime])

  // When context.isPlaying updates:
  // Set the state of isPlaying. Wrapping this in a layout effect prevents a rendering bug.
  React.useLayoutEffect(() => {
    setIsPlaying(context.isPlaying)
  }, [context.isPlaying])

  // Click handler
  const handleClick = () => {
    context.run('pause')

    setTimeout(() => {
      context.stdout('')
      window.alert('This is no place for mouse events!')
      window.open('https://www.youtube.com/watch?v=fBGWtVOKTkM')
    }, 5)
  }

  // Bar
  // ============================================================================
  const Bar = () => (
    <H color={theme.dark}>
      <H color={theme.pink}>[</H>
      {'—'.repeat(elapsed)}
      <H color={theme.gray_500}>█</H>
      {'—'.repeat(width - elapsed)}
      <H color={theme.pink}>]</H>
    </H>
  )

  // Percent
  // ============================================================================
  const Percent = () => <H color={theme.pink}>{Math.floor(currentTime*100/duration)}%</H>

  // Return
  // ============================================================================
  if (!isPlaying || !currentTime || !duration) return null
  return (
    <div onClick={handleClick}>
      <H>
        <Bar />{" "}<Percent />
      </H>
    </div>
  )
}

export default ProgressBar
