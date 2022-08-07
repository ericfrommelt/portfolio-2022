import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2em;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 6em;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
`

export default function Gibson () {
  return (
    <GridWrapper>
      <ImageWrapper>
        <Image
          src="/images/exp/Zero_Dark_Virus.png"
          alt="Zero Dark Virus"
          width={2048}
          height={2048}
          layout="intrinsic"
        />
      </ImageWrapper>
      <Image
        src="/images/exp/wgibson.jpg"
        alt="The William Gibson Library"
        width={960}
        height={1117}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}