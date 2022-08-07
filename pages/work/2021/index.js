import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131417;
  padding: 4em 0;
  color: white;

  @media (min-width: 800px) {
    padding: 6em 0;
  }
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.6rem;
  color: #FFF;

  @media (min-width: 800px) {
    grid-column: 2 / span 10;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const Artwork = styled.figure`
  padding: 4rem 0;
  grid-column: 2 / span 10;
`

const ArtworkInfo = styled.figcaption`
  font-size: .8rem;
  grid-column: 2 / span 10;
`


export default function Art2021 () {
  return (
    <>
      <PageHeader />
      <Layout>
        <Intro>
          <IntroHeadline>
            2021
          </IntroHeadline>
        </Intro>
        <GridWrapper>
          <Artwork>
            <Image
              src="/images/2021/GeneticDeflection.png"
              alt="Digital artwork by Eric Frommelt titled Genetic Deflection"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Genetic Deflection</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/HallOfJustice.png"
              alt="Digital artwork by Eric Frommelt titled Hall of Justice"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Hall of Justice</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Scales.png"
              alt="Digital artwork by Eric Frommelt titled Scales"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Scales</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Panic01.png"
              alt="Digital artwork by Eric Frommelt titled Panic 1"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Panic 01</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Panic02.png"
              alt="Digital artwork by Eric Frommelt titled Panic 2"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Panic 02</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Panic03.png"
              alt="Digital artwork by Eric Frommelt titled Panic 3"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Panic 03</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Panic04.png"
              alt="Digital artwork by Eric Frommelt titled Panic 4"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Panic 04</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/Panic05.png"
              alt="Digital artwork by Eric Frommelt titled Panic 5"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Panic 05</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse01.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 1"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 01</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse02.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 2"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 02</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse03.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 3"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 03</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse04.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 4"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 04</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse05.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 5"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 05</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse06.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 6"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 06</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse07.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 7"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 07</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2021/collapse08.png"
              alt="Digital artwork by Eric Frommelt titled Collapse 8"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Collapse 08</p>
            </ArtworkInfo>
          </Artwork>
        </GridWrapper>
      </Layout>
    </>
  )
}