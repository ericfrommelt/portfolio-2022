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

export default function Art001 () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/artificial-intelligence-2x.png"
        alt="Artificial Intelligence"
        width={2560}
        height={3313}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/breach-2x.png"
        alt="Breach"
        width={2560}
        height={3313}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}