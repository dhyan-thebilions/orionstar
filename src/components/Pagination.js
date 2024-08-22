import React from "react";
import classnames from 'classnames';
import { usePagination, DOTS } from '../hook/usePagination';
import '../styles/Pagination.css';

const Pagination = ({ onPageChange, currentPage, totalCount, pageSize, siblingCount }) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <React.Fragment>
            <ul
                className={classnames('pagination-container ul-override')}
            >
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left">Previous Page</div>
                </li>
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            className={classnames('pagination-item tuga', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right">Next Page</div>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Pagination;
