import styled from 'styled-components'

export const CardContainer = styled('div')`
    width: 400px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.0.75), 0 2px 2px hsl(0deg 0% 0% / 0.0.75), 0 4px 4px hsl(0deg 0% 0% / 0.0.75), 0 8px 8px 
    hsl(0deg 0% 0% / 0.0.75), 0 16px 16px, hsl(0deg 0% 0% / 0.0.75);
    position: absolute;
    background-color: antiquewhite;
`

export const CardHeader = styled('div')`
    width: 100%;
    min-height: 20px;
    background-color: inherit;
    opacity: 0.5;
    border-bottom: 1px solid black;
`

export const CardBody = styled('div')`
    padding: 1em;
    border-radius: 0 0 5px 5px;
`