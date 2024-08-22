import React, { useState, useMemo } from "react";
import { cardData } from "../data/CardData";
import { Card, Col, Row, Container } from "reactstrap";
import Pagination from "./Pagination";
import "../styles/Cards.css";

const Cards = () => {
    const PageSize = 16;

    const [currentPage, setCurrentPage] = useState(1);

    const rawData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return cardData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <div className="cards-bg">
            <Container>
                <div className="card-checkout">Check out some of the hottest games</div>
                <Row className="g-4">
                    {rawData?.map((item, index) => (
                        <Col xs={12} sm={12} md={6} lg={3} key={index + 1}>
                            <Card className="h-100 p-2 card-override">
                                <img
                                    className="card-image"
                                    alt={index + 1}
                                    src={`../assets/game/${item?.image}`}
                                />
                                <button className="card-button mt-1">{item?.name}</button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination
                    currentPage={currentPage}
                    totalCount={cardData?.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </Container>
        </div>
    );
};

export default Cards;
