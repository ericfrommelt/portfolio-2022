import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function ArtificialHumanity () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame01_4-30-2019.png"
        alt="Artificial Humanity styleframe 01"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame02_4-30-2019.png"
        alt="Artificial Humanity styleframe 02"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame03_4-30-2019.png"
        alt="Artificial Humanity styleframe 03"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame04_4-30-2019.png"
        alt="Artificial Humanity styleframe 04"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame05_4-30-2019.png"
        alt="Artificial Humanity styleframe 05"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/ArtificialHumanity_StyleFrame06_4-30-2019.png"
        alt="Artificial Humanity styleframe 06"
        width={1920}
        height={1080}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}