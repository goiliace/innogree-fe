import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '~/store';
import { useEffect } from 'react';

const Contact = () => {
    const user = useAppSelector(state => state?.auth?.user)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])
    return (
        <div>
            Contact
        </div>
    )
};

export default Contact;