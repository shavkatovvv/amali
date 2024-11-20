import { Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProduct,
    toggleAmount,
} from "../pages/home/service/redux/product-reducer";

export const Korzinka = () => {
    const { product_list, totalPrice } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    return (
        <Container maxWidth={"xl"}>
            <Stack>
                <Stack>
                    {product_list?.map((item) => (
                        <Stack key={item.id}>
                            <img
                                style={{ width: "200px" }}
                                src={item.img}
                                alt="img"
                            />
                            <Typography>{item.title}</Typography>
                            <Stack direction={"row"} alignItems={"center"}>
                                <IconButton
                                    onClick={() =>
                                        dispatch(
                                            toggleAmount({
                                                id: item.id,
                                                type: "increment",
                                            })
                                        )
                                    }
                                >
                                    +
                                </IconButton>
                                <span>{item.user_count}</span>
                                {item.user_count < 2 ? (
                                    <IconButton
                                        onClick={() =>
                                            dispatch(
                                                deleteProduct({ id: item.id })
                                            )
                                        }
                                    >
                                        x
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={() =>
                                            dispatch(
                                                toggleAmount({
                                                    id: item.id,
                                                    type: "decrement",
                                                })
                                            )
                                        }
                                    >
                                        -
                                    </IconButton>
                                )}
                            </Stack>
                        </Stack>
                    ))}
                    <strong>Total: {Number(totalPrice)}</strong>
                </Stack>
            </Stack>
        </Container>
    );
};
