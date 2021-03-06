import banner from 'textblocks/banner'
import pkg from '../../package.json'

export default (command, { stdout, settings, setBooting, setBooted, scrollToBottom }) => new Promise((resolve, reject) => {
  setBooting(true)
  setBooted(false)

  if (!settings.debug) {
    let cycle = 0
    let jitter = (n) => (n * Math.random()) + 10
    banner.forEach((line, index) => {
      const delay = cycle + jitter(100)

      if (line.pause) {
        cycle = delay + line.pause
      } else {
        setTimeout(() => {
          stdout(line)
          scrollToBottom()
        }, delay)
        cycle = delay
      }

      if (line.last) {
        setTimeout(() => {
          scrollToBottom()
          setBooting(false)
          setBooted(true)
          resolve()
        }, cycle);
      }
    });
  } else {
    stdout([`MTCT v${pkg.version}`, 'Debug mode: enabled', ''])
    setBooting(false)
    setBooted(true)
    resolve()
  }
})
