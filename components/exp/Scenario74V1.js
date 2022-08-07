import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
  gap: 2rem;
  
  @media (min-width: 600px) {
    padding: 6em;
    grid-template-columns: 1fr 1fr;
  }
`

export default function Scenario74V1 () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/scenario74/Cover.png"
        alt="Scenario74 Volume 1"
        width={1366}
        height={768}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/scenario74/Vol1-001-1.png"
        alt="Scenario74 Volume 1"
        width={1366}
        height={768}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/scenario74/Vol1-001-2.png"
        alt="Scenario74 Volume 1"
        width={1366}
        height={768}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/scenario74/Vol1-001-3.png"
        alt="Scenario74 Volume 1"
        width={1366}
        height={768}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}