import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";

export const Footer = () => {
    return (
        <Box bgcolor={"#f5f5f6"} pt={"40px"} pb={"36px"}>
            <Container>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                        <img style={{ width: "112px" }} src={logo} alt="" />
                        <Typography
                            sx={{ fontSize: "21px", color: "#333", mb: "5px" }}
                        >
                            +99 893 374-66-44
                        </Typography>
                        <Typography
                            sx={{ fontSize: "14px", color: "#333", mb: "12px" }}
                        >
                            справочная служба
                        </Typography>

                        <Typography
                            sx={{ fontSize: "21px", color: "#333", mb: "5px" }}
                        >
                            +99 890 253-77-53
                        </Typography>

                        <Typography
                            sx={{ fontSize: "14px", color: "#333", mb: "12px" }}
                        >
                            интернет-магазин
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Условия обмена и возврата
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Каталог
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            О компании
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Контакты
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Доставка
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Оплата
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Клиентам
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Личный кабинет
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Блог
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Обратная связь
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Информация
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Пользовательское соглашение
                        </Typography>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color="#333"
                            mb={"16px"}
                        >
                            Политика конфиденциальности и оферта
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
