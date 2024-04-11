import { PressableProps, TextInputProps } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export interface ButtonProps extends PressableProps{
    text: string;
}

export interface InputProps extends TextInputProps{
    label: string;
    typeInput?: boolean;
}


export interface CategoryCardProps extends PressableProps{
    icon: keyof typeof MaterialCommunityIcons.glyphMap
    text: string
}

export interface CustomInputBaseProps{
    width?: string; 
}
  
export interface CustomInputProps extends CustomInputBaseProps {
    label: string;
    typeInput?: boolean;
}
  
