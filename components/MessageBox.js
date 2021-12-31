export default function MessageBox({ type, message }) {
    return (
        <div className={`message-box message-box--${type}`}>
            <div className="message-box__content">{message}</div>
        </div>
    );
}