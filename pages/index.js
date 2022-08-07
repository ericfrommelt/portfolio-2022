import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PageHeader from '../components/header'
import Layout from '../components/layout'

const WorkBackground = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 20em;
  background-color: #131417;
`
const WorkSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 6rem 0;
`

const WorkWrapper = styled.ul`
  grid-column: 2 / span 10;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-row-gap: 4rem;
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const WorkCover = styled.li`
  
`


const WorkTitle = styled.figcaption`
  font-size: 2rem;
`

export default function Home() {
  return (
    <>
      <PageHeader home />
      <Layout>
        <WorkBackground />
        <WorkSection>
          <WorkWrapper>
            <WorkCover>
              <Link href="/work/hpe">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/HPEV1.png"}
                      alt={"HPE"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    HPE
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/creadev">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/CreaDevV1.png"}
                      alt={"CreaDev Conference"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    CreaDev Conference
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/terminalindex">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/TerminalIndex.png"}
                      alt={"Interaction sketchbook"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    Terminal Index
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/vaporized-claims">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/VaporizedClaimsV1.png"}
                      alt={"Responsive Collage"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    Vaporized Claims
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/transformation">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/TransformationV2.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Transformation
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/specimen">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/SpecimenV1.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Specimen
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/illustration">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/IllustrationV1.png"}
                      alt={"Augmented Reality Danger illustration"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Illustration
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/exp">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/ExpressionsV5.png"}
                      alt={"Abstract 2d images"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Explorations
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
          </WorkWrapper>
        </WorkSection>
      </Layout>
    </>
  )
}
