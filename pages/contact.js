import Form from '../components/Form';

export default function contact() {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your name',
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email',
        },
        {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            placeholder: 'Enter your message',
        },

    ];

    const header = (
        <div>
            <h3>Contact Me!</h3>
            <p> Want to work with me / hire me? Feedback about the site? Reach Out!</p>
        </div>
    );
    return (
        <div className="page__container">
            <Form
                fields={fields}
                header={header}
                button={'Send'}
                endpoint={'/api/contact'}
            />
        </div>
    );
}
