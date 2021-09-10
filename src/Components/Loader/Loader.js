import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const CustomLoader = () => (
    <div className={s.Loader}>
        <Loader
            type="Hearts"
            color="#12B8AA"
            height={40}
            width={100}
            timeout={3000}
        />
    </div>
);

export default CustomLoader;
