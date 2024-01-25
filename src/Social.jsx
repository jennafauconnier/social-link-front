import styled from 'styled-components'
import Jessica from './assets/images/avatar-jessica.jpeg'

export default function Social() {
  return (
    <Container>
      <Content>
        <Avatar>
          <ImgAvatar src={Jessica} />
          <NameTitle>Jessica Randall</NameTitle>
          <Location>London, United Kingdom</Location>
          <Paraphrase>"Front-end developer and avid reader."</Paraphrase>
        </Avatar>
        <Links>Github</Links>
        <Links>Frontend Mentor</Links>
        <Links>Linkedin</Links>
        <Links>Twitter</Links>
        <Links>Instagram</Links>
      </Content>
    </Container>
  )
}


const Container = styled.div`
    border-radius: 8px;
    padding: 30px 30px;
    background-color: hsl(0, 0%, 12%);
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 280px;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
        padding: 20px 20px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`

const Links = styled.button`
	  border: none;
    background-color: hsl(0, 0%, 20%);
    border-radius: 8px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin: 4px;
    padding: 10px;
    width: 100%;
    flex: 1;
    display: inline-block;
    &:hover {
        background-color: hsl(75, 94%, 57%);
        color: hsl(0, 0%, 8%)
    }
`

const Avatar = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`

const ImgAvatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 20px 0;
`

const NameTitle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 700;
`

const Location = styled.h3`
    color: hsl(75, 94%, 57%);
    font-size: 12px;
    font-weight: 600;
    margin-top: 0;
`

const Paraphrase = styled.span`
    color: white;
    font-size: 10px;
    font-weight: 400;
    margin: 10px 0;
`