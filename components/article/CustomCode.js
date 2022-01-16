import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CopyButton from "./CopyButton";
export function CustomCode({ children }) {
    const { dark } = useContext(ThemeContext);
    const language = children.props.className.replace("lang-", "");
    return (
        <div className="code__container">
            <CopyButton content={children.props.children} />
            <SyntaxHighlighter
                style={dark ? nord : vs}
                language={language}>
                {children.props.children}
            </SyntaxHighlighter>
        </div>
    )
}