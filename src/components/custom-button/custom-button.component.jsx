import React from 'react';
import { CustomButtonContainer } from './custom-button.styled';

const CustomButton=({children,...otherProps})=>(
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
)

export default CustomButton;