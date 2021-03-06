import React from 'react'
import styled from 'styled-components'
import pkg from '../../package.json'
import { Highlight as H } from 'Components/Styles'

const S = styled.span`
  white-space: pre;
`

export default [
  { pause: 3000 },
  <S>MMMMMMMM               MMMMMMMMTTTTTTTTTTTTTTTTTTTTTTT       CCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTTTT</S>,
  <S>M:::::::M             M:::::::MT:::::::::::::::::::::T    CCC::::::::::::CT:::::::::::::::::::::T</S>,
  <S>M::::::::M           M::::::::MT:::::::::::::::::::::T  CC:::::::::::::::CT:::::::::::::::::::::T</S>,
  <S>M:::::::::M         M:::::::::MT:::::TT:::::::TT:::::T C:::::CCCCCCCC::::CT:::::TT:::::::TT:::::T</S>,
  <S>M::::::::::M       M::::::::::MTTTTTT  T:::::T  TTTTTTC:::::C       CCCCCCTTTTTT  T:::::T  TTTTTT</S>,
  <S>M:::::::::::M     M:::::::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M:::::::M::::M   M::::M:::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M::::::M M::::M M::::M M::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M::::::M  M::::M::::M  M::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M::::::M   M:::::::M   M::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M::::::M    M:::::M    M::::::M        T:::::T       C:::::C                      T:::::T        </S>,
  <S>M::::::M     MMMMM     M::::::M        T:::::T        C:::::C       CCCCCC        T:::::T        </S>,
  <S>M::::::M               M::::::M      TT:::::::TT       C:::::CCCCCCCC::::C      TT:::::::TT      </S>,
  <S>M::::::M               M::::::M      T:::::::::T        CC:::::::::::::::C      T:::::::::T      </S>,
  <S>M::::::M               M::::::M      T:::::::::T          CCC::::::::::::C      T:::::::::T      </S>,
  <S>MMMMMMMM               MMMMMMMM      TTTTTTTTTTT             CCCCCCCCCCCCC      TTTTTTTTTTT  v{pkg.version}</S>,
  '',
  { pause: 2000 },
  <S>          |             |         ' | |                                   |             |       </S>,
  <S>|/~\/~\/~~|_/  /~\|   |~|~  \    /|~|~|/~\   \  //~\|   ||/~\  /~~||/~\/~\|_/  /~\|   |~|~      </S>,
  <S>|   \_/\__| \  \_/ \_/| |    \/\/ | | |   |   \/ \_/ \_/||     \__||   \_/| \  \_/ \_/| |  . . .</S>,
  <S>                                             _/                \__|                             </S>,
  { pause: 1000 },
  '',
  <S>Type <H>'play'</H> to start listening.</S>,
  <S>Type <H>'help'</H> for a list of commands.</S>,
  '',
  { pause: 3000, last: true },
]
