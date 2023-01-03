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

const CoverArt = styled.figure`
& > span {
  border-radius: 6px;
  overflow: hidden;
}
`

const WorkTitle = styled.figcaption`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .05rem;
  text-align: center;
  padding: 1rem 0;
  color: rgba(80, 80, 80, 100);
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
                  <CoverArt>
                    <Image
                      src={"/images/cover/HPEV1.png"}
                      alt={"HPE"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    HPE
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/creadev">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/CreaDevV1.png"}
                      alt={"CreaDev Conference"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    CreaDev Conference
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/terminalindex">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/TerminalIndex.png"}
                      alt={"Interaction sketchbook"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    Terminal Index
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/vaporized-claims">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/VaporizedClaimsV1.png"}
                      alt={"Responsive Collage"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    Vaporized Claims
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/transformation">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/TransformationV2.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Transformation
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/specimen">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/SpecimenV1.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Specimen
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/illustration">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/IllustrationV1.png"}
                      alt={"Augmented Reality Danger illustration"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Illustration
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/exp">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/ExpressionsV5.png"}
                      alt={"Abstract 2d images"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
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
