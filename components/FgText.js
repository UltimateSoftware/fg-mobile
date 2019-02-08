import React, {useEffect, Component} from "react";
import PropTypes from 'prop-types';
import { Text as T, StyleSheet } from "react-native";

let styles = StyleSheet.create({
  bold: { fontFamily: "OpenSans-Bold"  },
  normal: { fontFamily: "OpenSans-Regular" },
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 18 },
  xl: { fontSize: 24 },
  xxl: { fontSize: 32 },
});

export class FgText extends Component {
  
    render(){
        const {size, weight, color, style, children} = this.props;


        return (
            <T
                style={[
                styles[size],
                styles[weight],
                { color: color},
                style,
                ]}
            >
                {children}
            </T>
        );
    }
}

FgText.propTypes = {
    size: PropTypes.string, 
    weight: PropTypes.string, 
    color: PropTypes.string, 
    style: PropTypes.any, 
    children: PropTypes.any
};

FgText.defaultProps = {
    size: "md", 
    weight: "normal", 
    color: "#000",
  };

export default FgText;