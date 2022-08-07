import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledPageHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 2rem 0;
  background-color: ${props => {
    if (props.creadev) return '#253A46'
    if (props.hpe) return '#01a982'
    if (props.transformation) return '#3b3f42'
    if (props.illustration) return '#ed1e79'
    if (props.about || props.home) return '#131417'
    if (props.exp) return '#ccc'
    if (props.terminalindex) return '#423DB4'
    return '#131417'
  }};
  
  @media (min-width: 800px) {
    padding: 6rem 0;
  }
`

const NamePlate = styled.div`
  grid-column: 2 / span 5;
  color: rgba(255, 255, 255, 1);
  font-size: 1.2rem;

  @media (min-width: 800px) {
    font-size: 1.6rem;
  }
`

const Nav = styled.ul`
  grid-column: 7 / span 5;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`

const NavItem = styled.li`
  padding: 0 0 0 2em;
  `

const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 800px) {
    font-size: 1.6rem;
  }
`

const PageHeader = ({ creadev,home, hpe, transformation, illustration, about, exp, terminalindex }) => {
  const router = useRouter()

  return (
    <StyledPageHeader 
      creadev={creadev}
      home={home}
      hpe={hpe}
      transformation={transformation}
      illustration={illustration}
      about={about}
      exp={exp}
      terminalindex={terminalindex}
    >
      <NamePlate>
        <Link href="/">
          <a>Eric Frommelt</a>
        </Link>
      </NamePlate>
      <Nav>
        <NavItem>
          <Link href="/">
            <NavLink>
              Work
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
    </StyledPageHeader>
)
}

export default PageHeader