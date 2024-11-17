import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Korzinka } from "../../assets/icons/korzinka";
import { saveState } from "../../config/store";
import { Link } from "react-router-dom";

export const ProductCard = (item) => {
    const add = (key, data) => {
        saveState(key, data);
    };

    return (
        <Stack width={"241px"} pb={"100px"}>
            <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "165px" }} src={item.img} alt="img" />
            </Box>
            <Stack>
                <Link to={`/product-detail/${item.id}`}>
                    <Typography
                        fontWeight={400}
                        fontSize={"16px"}
                        lineHeight={"150%"}
                        color="#333"
                    >
                        {item.title}
                    </Typography>
                </Link>
                <Typography
                    mt={"6px"}
                    fontWeight={400}
                    fontSize={"16px"}
                    lineHeight={"150%"}
                    color="#333"
                >
                    {item.rame}
                </Typography>
                <Stack
                    mt={"24px"}
                    direction={"row"}
                    justifyContent={"space-between"}
                >
                    <Typography fontWeight={600} fontSize={"18px"} color="#333">
                        {item.price} Сум
                    </Typography>
                    <Button
                        onClick={() => add("product", item)}
                        variant="contained"
                    >
                        <Korzinka />
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
