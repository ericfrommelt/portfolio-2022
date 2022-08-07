import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
  gap: 2rem;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 6rem;
  }
`

export default function Everyday2016 () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/everyday_04-07-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-08-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-09-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-15-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-16-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-19-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_04-25-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_05-01-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_05-04-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_05-05-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_05-06-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/everyday_05-10-2016@4x.png"
        alt="Untitled"
        width={2560}
        height={2560}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}