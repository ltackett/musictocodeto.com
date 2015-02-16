React  = require('react/addons')

{stdout} = require('./stdout')
{scrollToBottom} = require('../utils/scroll_to_bottom')

module.exports = (context) ->
  {events, formatting} = context
  {programs} = require('./programs')(context)

  React.createClass
    displayName: 'stdin'

    mixins: [React.addons.LinkedStateMixin],

    lineIndex: 0

    keys:
      UP:    38
      DOWN:  40
      ENTER: 13

    getInitialState: ->
      cmd: ''
      lines: []

    handleCmd: (event) ->
      if event.which == @keys.ENTER
        cmd         = @state.cmd
        lines       = @state.lines
        mergedLines = lines
        mergedLines.push cmd
        if @isMounted() then @setState { lines: mergedLines }

        @runCmd(cmd)
        @setState {cmd: ''}

        scrollToBottom()

      # Previous command on up arrow
      else if event.which == @keys.UP
        if @state.lines.length > 0
          if @lineIndex >= 0
            line = @state.lines[@lineIndex]
            @setState {cmd: "#{line}"}

          if @lineIndex > 0
            @lineIndex--

      # Next command on down arrow
      else if event.which == @keys.DOWN
        if @state.lines.length > 0
          if @lineIndex < @state.lines.length-1
            @lineIndex++
            line = @state.lines[@lineIndex]
            @setState {cmd: "#{line}"}

          else
            @setState {cmd: ''}

    render: ->
      <span id="stdin" ref="stdin">
        {@state.cmd}
        <input  ref="stdinInput"
                valueLink={@linkState('cmd')}
                onKeyDown={@handleCmd}
                style={@inputStyle} />
      </span>

    componentDidMount: ->
      @lineIndex = @state.lines.length-1
      @refs.stdinInput.getDOMNode().focus()

    inputStyle:
      position: 'fixed'
      opacity:  0
      bottom:   0
      right:    0


    # This is the main function for running commands.
    # It splits things up into the command and its params, and
    # checks to see if a command exists by that name.
    # If it does, it runs the command.
    # If it doesn't, it returns 'command not found'.
    # =========================================================================
    runCmd: (cmd) ->
      @lineIndex = @state.lines.length-1

      events.emit('command:running', true)
      stdout("> #{cmd}")

      # Get cmd
      cmdArray = cmd.split(/\s/)
      cmd      = cmdArray[0]

      # Get cmd params
      cmdArray.splice(0,1)
      params = cmdArray

      console.group "Command:", cmd
      console.table {params: params}
      console.groupEnd()

      # Run the program
      if typeof programs[cmd] == "object"
        programs[cmd].run(cmd, params)

      # Command not found
      else
        stdout "#{formatting.error('command not found:')} #{cmd}"
        events.emit('command:running', false)

      # Add blankline
      stdout " "