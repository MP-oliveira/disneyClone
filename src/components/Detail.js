import React from 'react';
import styled from 'styled-components';


function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
              
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 7m Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Uma mae chinesa que está triste quando seu filho crescido e sai de casa tem outra chance de maternidade quando um de seus bolinhos ganha vida. Mas ela descobre que nada fica bonito e pequeno pra sempre.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div `
        
        min-height: calc(100vh - 70px);
        padding: 0 calc(5vw + 5px);
        position: relative;
        z-index: -1;
        opacity: 0.8;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    bottom: 0;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    height: 25vh;
    min-height: 170px;
    width: 30vw;
    min-width: 200px;
    margin-bottom: 50px;
    margin-left: -70px;


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
    
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &::hover {
        background: rgb(198, 198, 198);
        border: 1px solid rgb(249, 249, 249);
    }
`


const AddButton = styled.button`
    margin:right: 16px;
    width: 44px;
    height: 44px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }

    `

const GroupWatchButton = styled(AddButton)` 
    margin-left: 16px;
    background: rgb(0, 0, 0);
    cursor: pointer;
`

const SubTitle = styled.div` 
    margin-top: 30px;
    font-size: 12px;
    color: rgb(249, 249, 249);
`

const Description = styled.div` 
    width: 70%;
    font-size: 27px;
    margin-top: 30px;
    color: rgb(249, 249, 249);
`





