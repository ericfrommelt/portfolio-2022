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

export default function AlphaNotation () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/alphanumeric_03-2x.png"
        alt="Scenario74 Volume 1"
        width={4000}
        height={4074}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/Annotation232416.png"
        alt="Scenario74 Volume 1"
        width={999}
        height={995}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}