import React from 'react';
import ReactDOM from 'react-dom';

const ErrorMessage = (props) => (
    <div>
        <h2>{`${props.code}: ${props.title}`}</h2>
        <p>{props.description}</p>
    </div>
);

const withStyles = (WrappedComponent) => {
    return (props) => (
        <div style={{ 
                fontFamily: 'Verdana',
                color: props.color ? props.color : "red",
                backgroundColor: '#DDD',
                padding: '20px' }}
        >
            <p>This is HOC</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const ErrorWithStyles = withStyles(ErrorMessage);

ReactDOM.render(
    <ErrorWithStyles
        code={500}
        title="Internal Server Error"
        description="DB not working, error occured while connecting..."
        color="blue"
    />,
    document.getElementById('app')
);
