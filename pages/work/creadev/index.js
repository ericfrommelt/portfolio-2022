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
  background-color: #253A46;
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
  color: #E9FF25;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const SectionHeader = styled.h2`
  color: #3b3f42;
  font-weight: 400;
  place-self: left;

  @media (min-width: 800px) {
    place-self: center;
  }
`

const Poster = styled.div`
  padding-top: 4rem;
  grid-column: 2 / span 10;

  @media (min-width: 800px) {
    grid-column: 1 / span 6;
  }
`

const Badge = styled.div`
  grid-column: 2 / span 10;
  padding-bottom: 4rem;

  @media (min-width: 800px) {
    grid-column: 7 / span 6;
    grid-row: 2;
  }
`

const Site = styled.div`
  grid-column: 1 / span 12;
`

const Guidelines = styled.div`
  padding: 4rem 0;
  grid-column: 1 / span 12;
`


export default function CreaDev () {
  return (
    <>
      <PageHeader creadev />
      <Layout>
        <Intro>
          <IntroHeadline>
            Brand design concept for a conference focused on digital art and creative coding.
          </IntroHeadline>
        </Intro>
        <GridWrapper>
          <Poster>
            <Image
              src="/images/creadev/CreaDev_Poster_Mockup.png"
              alt="CreaDev poster design"
              width={3200}
              height={3200}
              layout="intrinsic"
            />
          </Poster>
          <Badge>
            <Image
              src="/images/creadev/CreaDev_Badge_Mockup_1.png"
              alt="CreaDev badge design"
              width={2625}
              height={2625}
              layout="intrinsic"
            />
          </Badge>
          <Site>
            <Image
              src="/images/creadev/CreaDev_Site_Mockup.png"
              alt="CreaDev site design screens"
              width={5700}
              height={4000}
              layout="intrinsic"
            />
          </Site>
          <Guidelines>
            <Image
              src="/images/creadev/CreaDev_Guidelines.png"
              alt="CreaDev visual brand guidelines"
              width={2300}
              height={1440}
              layout="intrinsic"
            />
          </Guidelines>
        </GridWrapper>
      </Layout>
    </>
  )
}