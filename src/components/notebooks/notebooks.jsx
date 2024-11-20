import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Korzinka } from "../../assets/icons/korzinka";

import { Link } from "react-router-dom";

export const Notebooks = (item) => {
    return (
        <Stack direction={"column"} width={"413px"} pb={"33px"}>
            <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
                <Box sx={{ textAlign: "center" }}>
                    <img style={{ width: "140px" }} src={item.img} alt="img" />
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
                        <Typography
                            fontWeight={600}
                            fontSize={"18px"}
                            color="#333"
                        >
                            {item.price}Сум
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
