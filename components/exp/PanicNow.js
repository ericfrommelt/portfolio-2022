import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function PanicNow () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/Untitled-Panic01.png"
        alt="Panic Now (1 of 5)"
        width={2560}
        height={1440}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/Untitled-Panic02.png"
        alt="Panic Now (2 of 5)"
        width={2560}
        height={1440}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/Untitled-Panic03.png"
        alt="Panic Now (3 of 5)"
        width={2560}
        height={1440}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/Untitled-Panic04.png"
        alt="Panic Now (4 of 5)"
        width={2560}
        height={1440}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/Untitled-Panic05.png"
        alt="Panic Now (5 of 5)"
        width={2560}
        height={1440}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}