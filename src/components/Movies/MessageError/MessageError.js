import "./MessageError.css"

const MessageError = (props) => {
    return (
        <div className="message-error">
            <p className="message-error__text">{props.text}</p>
        </div>
    )
};

export default MessageError;