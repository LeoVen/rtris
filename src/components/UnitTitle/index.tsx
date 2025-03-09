import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Title = styled(Typography)`
    margin-bottom: 0.5em;
`

export function UnitTitle({ title }: { title: string }) {
    return (
        <Title fontSize={"20px"} fontFamily={"cinzel"} > {title}</Title>
    )
}