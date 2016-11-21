import React from 'react';
import { Button } from 'react-bootstrap';

class CustomButton extends React.Component {
    render() {
    	const { text, onClick, icon } = this.props;
    	return <Button bsStyle="danger" className={icon} onClick={onClick}>{text}</Button>;
    }
}
export default CustomButton;