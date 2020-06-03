import React, {Fragment} from 'react';
import { Loading } from '../../components';
import { WelcomeBox } from '../../components';
import CategoryItem from './CategoryItem';
import { useSelector } from 'react-redux';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => {
    const { name } = useSelector(state => state.user);
    return (
        <Fragment>
        <WelcomeBox name={name} />
        <div className="categories">
            <div className="container">
                <h3 className="categories__title">Categorias</h3>
                <div className="categories__content">
                    {isLoading
                        ? <Loading />
                        : data.map((category) => (
                            <CategoryItem key={category.id}
                                id={category.id}
                                icon={category.icons[0]}
                                name={category.name}
                                url={url} />
                        ))}
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Categories;

