
export default function Title(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    font-size: 24px;
                    font-family: Monospace;
                    color: #404040;
                }
            `}</style>
        </>
    );
}