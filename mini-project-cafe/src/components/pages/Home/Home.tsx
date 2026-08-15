import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to Ignaciasz Caffe</h1>
            <Link to={'/login'}>
                <Button color='primary'>Login</Button>
            </Link>
        </div>
    )
}

export default Home;