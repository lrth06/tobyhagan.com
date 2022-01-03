import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord, prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export function CustomCode({ children }) {
    const { dark } = useContext(ThemeContext);
    const language = children.props.className.replace("lang-", "");
    return (
        <SyntaxHighlighter
            style={dark ? nord : prism}
            language={language}
        >
            {children.props.children}
        </SyntaxHighlighter>
    )
}