import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  gap: 2rem;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 6rem;
  }
`

export default function Art002 () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/leak-2x.png"
        alt="Artificial Intelligence"
        width={2560}
        height={3313}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/norad-2x.png"
        alt="Breach"
        width={2560}
        height={3313}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}