import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Korzinka } from "../assets/icons/korzinka";
import { saveState } from "../config/store";

export const Notes = (item) => {
    const add = (key, data) => {
        saveState(key, data);
    };
    return (
        <Stack width={"300px"} height={"350px"}>
            <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "157px" }} src={item.img} alt="img" />
            </Box>
            <Stack>
                <Typography
                    fontWeight={400}
                    fontSize={"16px"}
                    lineHeight={"150%"}
                    color="#333"
                >
                    {item.title}
                </Typography>
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
                    gap={"16px"}
                >
                    <Typography fontWeight={600} fontSize={"18px"} color="#333">
                        {item.price}Сум
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
