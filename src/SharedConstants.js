import {Dimensions} from "react-native";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const API_BASE = 'http://localhost:5000'; // for use with android http://10.0.2.2:5000
export const AUTH_BASE = 'https://fearless0.auth0.com';
export const AUTH_TOKEN = 'dontcheckinyourtokens';

export const text_sizes = {
    sm: 14,
    md: 18,
    lg: 28,
    xl: 36,
    xxl: 48,
};

const baseunit = 16;

export const frames = {
    xs: baseunit * 3,
    sm: baseunit * 4,
    md: baseunit * 6,
    lg: baseunit * 8,
    xlg: baseunit * 12,
    xxlg: baseunit * 16
}

export const spacing = {
    xs: baseunit * 1,
    sm: baseunit * 1.5,
    md: baseunit * 2,
    lg: baseunit * 3,
    xlg: baseunit * 4,
    xxlg: baseunit * 6
}
  