import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  @media screen and (min-width: 600px) {
    padding: 6rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const ImageWrapper = styled.div`
  grid-column: 1 / span 3;
`

export default function Aip () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/AIP_03-2x.png"
        alt="AIP (1 of 4)"
        width={4000}
        height={5000}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/AIP_02-2x.png"
        alt="AIP (2 of 4)"
        width={4000}
        height={5000}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/AIP_01-2x.png"
        alt="AIP (3 of 4)"
        width={4000}
        height={5000}
        layout="intrinsic"
      />
      <ImageWrapper>
        <Image
          src="/images/exp/AIP_04-2x.png"
          alt="AIP (4 of 4)"
          width={4000}
          height={5000}
          layout="intrinsic"
        />
      </ImageWrapper>
    </GridWrapper>
  )
}