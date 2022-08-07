import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
  gap: 2rem;
  
  @media (min-width: 600px) {
    padding: 6em;
    grid-template-columns: 1fr;
  }
`

export default function Sats () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/028-MitSats-02-13-2020.png"
        alt="Scenario74 Volume 1"
        width={2224}
        height={1668}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}