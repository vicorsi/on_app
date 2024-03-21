// import { styled } from "styled-components";

// export interface CustomButtonProps{
//     width: string;
//     height: string;
//     backgroundColor: string;
//     color: string;
//     borderRadius: string;
//     text: string
// }

// export const StyledButton = styled.button<CustomButtonProps>`
//     background-color: ${props => props.backgroundColor || "#000" };
//     color: ${props => props.color || "#fff" };
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: ${props => props.width || '100px'};
//     height: ${props => props.height || '25px'};
//     border-radius: ${props => props.borderRadius || '8px'};
//  `

// export const CustomButton: React.FC<CustomButtonProps> = ({text,...props}) => {
//     return(
//         <StyledButton {...props} text={text}>
//             <h1>{text}</h1>
//         </StyledButton>
//     )
// }