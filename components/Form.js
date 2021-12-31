import { useForm } from './hooks/useForm';
import { useState } from 'react';
import axios from 'axios';
import MessageBox from './MessageBox';
export default function Form({ fields, header, button, endpoint }) {
    const [values, handleChange] = useForm({});
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null,
    });
    const handleSubmit = async e => {
        e.preventDefault();
        setStatus({
            loading: true,
            success: false,
            error: null,
        });

        try {
            const res = await axios.post(endpoint, values);
            if (res) {
                setStatus({
                    loading: false,
                    success: true,
                    error: null,
                    message: res.data.message,
                });
            }

            if (res.headers.authorization) {
                localStorage.setItem(
                    'Authorization',
                    res.headers.authorization.split(' ')[1],
                );
            }
            if (res.headers.refresh) {
                localStorage.setItem('Refresh', res.headers.refresh);
            }
        } catch (err) {
            setStatus({
                loading: false,
                success: false,
                error: err.response.data,
            });
        }
    };

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit} className="form">
                {status.success && (
                    <MessageBox type="success" message={status.message} />
                )}
                {status.error && !status.error.fields && (
                    <MessageBox type="error" message={status.error.message} />
                )}
                {header && <div className="form__header">{header}</div>}
                {fields.map(field => {
                    return (
                        <div key={field.name} className={'form__input'}>
                            <input
                                aria-label={field.label}
                                aria-required={field.required}
                                type={field.type}
                                name={field.name}
                                value={field.value ? field.value : values[field.name]}
                                onChange={
                                    field.type === 'file' ? field.uploadFunction : handleChange
                                }
                                autoComplete={
                                    field.name === 'password' || field.name === 'confirmPassword'
                                        ? 'new-password'
                                        : 'off'
                                }
                                autoCorrect={field.name === 'message' ? 'on' : 'off'}
                            />
                            {status.error &&
                                status.error.fields &&
                                status.error.fields.includes(field.name) && (
                                    <label htmlFor={field.name} className="error__container">
                                        <span className="error__message">
                                            {status.error.message}
                                        </span>
                                    </label>
                                )}
                            <label htmlFor={field.name} className="label__container">
                                <span className="label__name">{field.label}</span>
                            </label>
                        </div>
                    );
                })}
                <button disabled={status.loading} type="submit">
                    {status.loading ? 'loading' : button}
                </button>
            </form>
        </div>
    );
}