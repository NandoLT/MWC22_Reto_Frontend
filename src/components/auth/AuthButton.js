import {Link} from 'react-router-dom';
import {Button} from '../shared/Button';

const AuthButton = ({ className, isLogged, onLogout}) => {
    const handleLogout = () => {
        onLogout();        
    };

    const props = isLogged ?
        {onClick: handleLogout, children:'Log out'} :
        {
            as: Link,
            to: '/',
            children: 'Home',
        };

    return <Button className={className} {...props} />;
};

AuthButton.defaultProps = {
    isLogged: false,
};

export default AuthButton;