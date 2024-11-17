import { Box } from "@mui/material";
import React from "react";

export const Brands = (item) => {
    return (
        <Box width={"400px"} pb={"100px"}>
            <img
                style={{ width: "181px", height: "90px" }}
                src={item.img}
                alt=""
            />
        </Box>
    );
};
