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
  background-color: #3b3f42;
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
  color: #f9b94e;

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

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 4em 2em;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 12em 1em;
  }
`

const Video = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  margin: 2rem 0;
  grid-column: 1 / span 12;

  @media (min-width: 800px) {
    grid-column: 2 / span 10;
    margin: 6rem 0;
  }
`

const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export default function Transformation () {
  return (
    <>
      <PageHeader transformation />
      <Layout>
        <Intro>
          <IntroHeadline>
            Motion design and direction for an internal video based on the concept of Transformation.
          </IntroHeadline>
          <Video>
            <Iframe
              src="https://player.vimeo.com/video/283314295" 
              width="100%" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen
            >
            </Iframe>
          </Video>
        </Intro>
        <Boards>
          <SectionHeader>Styleframes</SectionHeader>
          <Image
            src="/images/transformation/transformation01.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation02.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation03.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation04.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation05.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation06.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation07.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation08.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation09.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation10.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation11.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation12.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation13.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation14.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation15.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation16.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation17.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation18.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation19.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation20.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation21.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
          <Image
            src="/images/transformation/transformation22.png"
            alt="Storyboard frame for a video titled Transformation"
            width={1920}
            height={1080}
            layout="intrinsic"
          />
        </Boards>
      </Layout>
    </>
  )
}