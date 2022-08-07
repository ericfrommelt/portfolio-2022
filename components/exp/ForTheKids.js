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

export default function ForTheKids () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/for-the-kids-austin-2x.png"
        alt="Scenario74 Volume 1"
        width={2560}
        height={1752}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/for-the-kids-olivia-2x.png"
        alt="Scenario74 Volume 1"
        width={2560}
        height={1752}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/for-the-kids-hunter-2x.png"
        alt="Scenario74 Volume 1"
        width={2560}
        height={1752}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/for-the-kids-greyson-2x.png"
        alt="Scenario74 Volume 1"
        width={2560}
        height={1752}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}