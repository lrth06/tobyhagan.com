import Form from '../components/Form';
import Head from 'next/head';
export default function contact() {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            placeholder: 'Enter your name',
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,

            placeholder: 'Enter your email',
        },
        {
            name: 'phone',
            label: 'Phone (optional)',
            type: 'tel',

            placeholder: 'Enter your phone number',
        },
        {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            required: true,

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
            <Head>
                <title>Contact Me</title>
            </Head>
            <Form
                fields={fields}
                header={header}
                button={'Send'}
                endpoint={'/api/contact'}
            />
        </div>
    );
}
