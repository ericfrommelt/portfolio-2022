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

export default function BlackCanvas () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/016.png"
        alt="Scenario74 Volume 1"
        width={2048}
        height={2048}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/018.png"
        alt="Scenario74 Volume 1"
        width={2048}
        height={2048}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/019.png"
        alt="Scenario74 Volume 1"
        width={2048}
        height={2048}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/020.png"
        alt="Scenario74 Volume 1"
        width={2048}
        height={2048}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}