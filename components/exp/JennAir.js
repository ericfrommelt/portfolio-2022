import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 6em 0;
  gap: 2rem;
  
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function JennAir () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/JennAir-Choose-Your-Column.png"
        alt="Choose Your Column"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Noir.png"
        alt="Noir"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Noir-Two.png"
        alt="Noir Two"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Obsidian-Interior.png"
        alt="Noir"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Rise.png"
        alt="Rise"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Rise-Two.png"
        alt="Rise Two"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Rise-Three.png"
        alt="Rise Three"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/JennAir-Rise-Four.png"
        alt="Rise Four"
        width={4000}
        height={2610}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}