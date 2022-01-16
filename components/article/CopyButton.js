import { useState, useEffect } from 'react';
import Copy from '../../icons/copy.svg';
import CheckMark from '../../icons/check-mark.svg';
export default function CopyButton({ content }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <div className="copy__container">
            <button
                title={copied ? "Copied!" : "Copy to Clipboard"}
                className="copy__button"
                disabled={copied ? true : false}
                onClick={copy}>
                {copied ? (
                    <CheckMark className="copied" />
                ) : (
                    <Copy className="copy" />
                )}
            </button>

        </div>
    )
}