import { Box } from "@mui/material";
import React from "react";

export const Ads = (item) => {
    return (
        <Box width={"430px"}>
            <img src={item.img} alt="#" />
        </Box>
    );
};
