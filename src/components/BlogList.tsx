import { useCallback, useState, type FC } from 'react';

const BlogList: FC<{ defaultVisibility?: boolean }> = ({ defaultVisibility }) => {
    const [visible, setVisible] = useState(defaultVisibility ?? false);

    const handleChangeVisibility = useCallback(() => {
        setVisible((visible) => !visible)
    }, [])

    return <>
        <button onClick={handleChangeVisibility}>{visible ? 'Ocultar' : 'Mostrar'}</button>
        {
            visible ?
                <ul>
                    <li>
                        <a href="/posts/1/">Post 1</a>
                    </li>
                    <li>
                        <a href="/posts/2/">Post IA</a>
                    </li>
                </ul>
                :
                <p>La lista esta oculta</p>
        }
    </>
}

export default BlogList;