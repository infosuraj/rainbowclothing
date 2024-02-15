import images from '../../assets'
import Directory from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";

const categories = [
    {
        id: 1,
        title: 'Hats',
        imageSource: images.hats,
    },
    {
        id: 2,
        title: 'Jackets',
        imageSource: images.jackets,
    },
    {
        id: 3,
        title: 'Sneakers',
        imageSource: images.sneakers,
    },
    {
        id: 4,
        title: 'Women',
        imageSource: images.women,
    },
    {
        id: 5,
        title: 'Men',
        imageSource: images.men,
    },
];
const Home = () => {
    return (
        <>
            <Directory categories={categories}/>
            <Outlet/>
        </>
    );
};

export default Home;
