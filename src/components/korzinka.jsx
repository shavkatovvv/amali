import {
    Container,
    IconButton,
    Stack,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProduct,
    toggleAmount,
} from "../pages/home/service/redux/product-reducer";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { saveState } from "../config/store";

export const Korzinka = () => {
    const { product_list, totalPrice } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const token = localStorage.getItem("userData");
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (token) => {
        if (!token) {
            navigate("/register");
        }
        reset();
    };

    return (
        <Container maxWidth={"xl"}>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                    <Button
                        onClick={() => useDispatch(deleteProduct())}
                        type="submit"
                        variant="contained"
                    >
                        Buyurtma berish
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};
