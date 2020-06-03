import React from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => {
    return (
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
    );
}

export default Categories;

