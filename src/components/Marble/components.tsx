import styled from '@emotion/styled'
import { Paper } from '@mui/material'

// border-image: url() top right bottom left <fill> <round>
// https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
export const MarbleContainer = styled.div`
    border: 30px solid transparent;
    border-image: url(assets/marble.png) 160 210 fill;
`
