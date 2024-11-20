import React from "react";
import { useParams } from "react-router-dom";
import { useGetPhones } from "../pages/home/service/query/useGetPhones";
import {
    Container,
    Stack,
    Typography,
    Rating,
    Box,
    Button,
} from "@mui/material";
import { useGetNotebooks } from "../pages/home/service/query/useGetNotebooks";

export const ProductDetail = () => {
    const { data: phones } = useGetPhones();
    const { data: notebooks } = useGetNotebooks();
    const { id } = useParams();

    const product = phones?.find((phone) => phone.id === parseInt(id));
    const notebook = notebooks?.find(
        (notebook) => notebook.id === parseInt(id)
    );

    if (!product && !notebook) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            {product && (
                <>
                    <Stack direction={"row"} gap={"32px"}>
                        <Stack>
                            <Typography
                                fontSize={"24px"}
                                fontWeight={"semibold"}
                                marginBottom={"20px"}
                            >
                                {product.title}
                            </Typography>
                            <Rating sx={{ marginBottom: "76px" }} />
                            <img
                                style={{
                                    width: "435px",
                                    height: "435px",
                                    marginBottom: "90px",
                                }}
                                src={product.img}
                                alt={product.title}
                            />
                        </Stack>

                        <Stack mt={"110px"}>
                            <Typography
                                fontSize={"24px"}
                                fontWeight={"semibold"}
                                marginBottom={"16px"}
                            >
                                Объем памяти
                            </Typography>
                            <Typography
                                fontSize={"24px"}
                                fontWeight={"semibold"}
                                mb={"30px"}
                            >
                                {product.rame}
                            </Typography>
                            <Typography
                                fontSize={"24px"}
                                fontWeight={"semibold"}
                                mb={"20px"}
                                color="#333"
                            >
                                Характеристики
                            </Typography>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    Цвет:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    {product.color}
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    экран:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    6.2"/2400x1080 Пикс
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    оперативная память:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    8GB
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    память:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    128GB
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    4 камеры:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    64/12/12
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} gap={"8px"} mb={"15px"}>
                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#999"
                                >
                                    беспроводные интерфейсы:
                                </Typography>

                                <Typography
                                    fontSize={"16px"}
                                    fontWeight={"normal"}
                                    lineHeight={"150%"}
                                    color="#333"
                                >
                                    беспроводные интерфейсы:
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            mt={"110px"}
                            border={"1px solid #E0E0E0"}
                            width={"340px"}
                            height={"167px"}
                            padding={"16px"}
                            textAlign={"center"}
                        >
                            <Typography
                                fontSize={"36px"}
                                fontWeight={"semibold"}
                                lineHeight={"122%"}
                                color="#333"
                                mt={"15px"}
                            >
                                {product.price}
                            </Typography>
                            <Button
                                sx={{ width: "100%", mt: "30px" }}
                                variant="contained"
                            >
                                <Typography>Добавить в корзину</Typography>
                            </Button>
                        </Box>
                    </Stack>
                </>
            )}
            {notebook && (
                <div>
                    <Typography
                        fontSize={"24px"}
                        fontWeight={"semibold"}
                        marginBottom={"16px"}
                    >
                        {notebook.title}
                    </Typography>
                    <img src={notebook.img} alt={notebook.title} />
                    <p>Price: {notebook.price}</p>
                </div>
            )}
        </Container>
    );
};
