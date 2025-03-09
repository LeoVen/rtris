import styled from '@emotion/styled'

// https://yoksel.github.io/flex-cheatsheet/
export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
`

export const UnitCard = styled.div`
    width: 350px;
`

export const UnitPortrait = styled.img`
    margin: 0px 16px 8px 0px;
    height: 160px;
    width: auto;
`