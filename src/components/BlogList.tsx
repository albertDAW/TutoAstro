import { useCallback, useState, type FC } from 'react';

const BlogList: FC<{ defaultVisibility?: boolean }> = ({ defaultVisibility }) => {
    const [visible, setVisible] = useState(defaultVisibility ?? false);

    const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
    const handleChangeVisibility = useCallback(() => {
        setVisible((visible) => !visible)
    }, [])

    return <>
        <button onClick={handleChangeVisibility}>{visible ? 'Ocultar' : 'Mostrar'}</button>
        {
            visible ?
                <ul>
                    <li>
                        <a href="/posts/1/">Post 1. {rtf.format(-21, 'day',)}</a>
                    </li>
                    <li>
                        <a href="/posts/2/">Post IA. {rtf.format(-22, 'day')}</a>
                    </li>
                    <li>
                        <a href="/posts/3/">Chat. {rtf.format(0, 'day')}</a>
                    </li>
                </ul>
                :
                <p>La lista esta oculta</p>
        }
    </>
}

export default BlogList;