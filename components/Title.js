import appConfig from '../config.json';

export default function Title(props) {
    console.log(props.children);
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    font-size: 24px;
                    font-family: Monospace;
                    color: #f2f2f2;
                }
            `}</style>
        </>
    );
}