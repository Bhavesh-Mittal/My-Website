import '../Stylesheets/Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/achievements'>Achievements</CustomLink>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link className={ isActive ? 'link active' : 'link' } to={ to } { ...props }>{ children }</Link>
    );
}