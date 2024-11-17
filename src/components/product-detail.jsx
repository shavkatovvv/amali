import React from "react";
import { useParams } from "react-router-dom";
import { useGetPhones } from "../pages/home/service/query/useGetPhones";
import { Container } from "@mui/material";

export const ProductDetail = () => {
    const { data: phones } = useGetPhones();
    const { id } = useParams();

    const product = phones?.find((phone) => phone.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <div>
                <img src={product.img} alt={product.title} />
                <h1>{product.title}</h1>

                <p>Price: {product.price}</p>
            </div>
        </Container>
    );
};
