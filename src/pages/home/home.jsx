import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Pagination, Autoplay, Scrollbar, Navigation } from "swiper/modules";
import { useGetCatalog } from "./service/query/useGetCatalog";
import { Catalog } from "../../components/catalog";
import { Banner } from "../../components/banner/banner";
import { useGetPhones } from "./service/query/useGetPhones";
import { ProductCard } from "../../components/product-card";
import { useGetAds } from "./service/query/useGetAds";
import "./home.css";
import { Ads } from "../../components/ads/ads";
import { Phones } from "../../components/phones/phones";
import { useGetNotebooks } from "./service/query/useGetNotebooks";
import { Notebooks } from "../../components/notebooks/notebooks";
import { Notes } from "../../components/notes";
import { Brands } from "../../components/brands/brands";
import { useGetBrands } from "./service/query/useGetBrands";

export const Home = () => {
    const { data } = useGetCatalog();
    const { data: phone } = useGetPhones();
    const { data: ads } = useGetAds();
    const { data: notebook } = useGetNotebooks();
    const { data: brands } = useGetBrands();
    return (
        <Box>
            <Banner />
            <Container maxWidth="xs">
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    mx={"43px"}
                    py={"32px"}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={5}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        spaceBetween={"20px"}
                    >
                        {data?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Catalog {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
            </Container>
            <Container
                maxWidth="xs"
                sx={{ pt: "16px", pb: "48px", position: "relative" }}
            >
                <Stack>
                    <Typography mb={"24px"} variant="h5">
                        Смартфоны и планшеты
                    </Typography>
                    <Stack direction={"row"} gap={"24px"}>
                        <Swiper
                            modules={[Pagination, Scrollbar, Navigation]}
                            slidesPerView={5}
                            navigation={true}
                        >
                            {phone?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ProductCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Stack>
                </Stack>
            </Container>
            <Box mb={"32px"} bgcolor={"#00CBFE"} padding={"72px"}>
                <Container>
                    <Typography color="#281800" mb={"24px"} variant="h5">
                        Акции
                    </Typography>

                    <Stack
                        direction={"row"}
                        gap={"24px"}
                        justifyContent={"center"}
                    >
                        {ads?.map((item) => {
                            return <Ads key={item.id} {...item} />;
                        })}
                    </Stack>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Stack
                        direction={"row"}
                        // justifyContent={"center"}
                        gap={"32px"}
                    >
                        <Box>
                            <Typography mb={"30px"} variant="h5">
                                Смартфоны и планшеты
                            </Typography>
                            <Stack direction={"column"} gap={"24px"}>
                                {phone?.slice(0, 3).map((item) => {
                                    return <Phones key={item.id} {...item} />;
                                })}
                            </Stack>
                        </Box>

                        <Box>
                            <Typography mb={"30px"} variant="h5">
                                Ноутбуки, планшеты и компьютеры
                            </Typography>
                            <Stack direction={"column"} gap={"24px"}>
                                {notebook?.slice(0, 3).map((item) => {
                                    return (
                                        <Notebooks key={item.id} {...item} />
                                    );
                                })}
                            </Stack>
                        </Box>

                        <Box>
                            <Typography mb={"30px"} variant="h5">
                                Смартфоны и планшеты
                            </Typography>
                            <Stack direction={"column"} gap={"24px"}>
                                {phone?.slice(0, 3).map((item) => {
                                    return <Phones key={item.id} {...item} />;
                                })}
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Stack>
                <Container
                    maxWidth="xs"
                    sx={{ pt: "16px", pb: "48px", position: "relative" }}
                >
                    <Stack>
                        <Typography mb={"24px"} variant="h5">
                            Смартфоны и планшеты
                        </Typography>
                        <Stack direction={"row"} gap={"24px"}>
                            {/* <Swiper
                                modules={[Pagination, Scrollbar, Navigation]}
                                slidesPerView={5}
                                navigation={true} */}
                            {/* > */}
                            {phone?.slice(0, 5).map((item) => (
                                // <SwiperSlide key={item.id}>
                                <ProductCard {...item} />
                                // </SwiperSlide>
                            ))}
                            {/* </Swiper> */}
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Container
                maxWidth="xs"
                sx={{ pt: "16px", pb: "48px", position: "relative" }}
            >
                <Stack>
                    <Typography mb={"30px"} variant="h5">
                        Ноутбуки, планшеты и компьютеры
                    </Typography>
                    <Stack direction={"row"} gap={"50px"}>
                        {notebook?.slice(0, 6).map((item) => {
                            return <Notes key={item.id} {...item} />;
                        })}
                    </Stack>
                </Stack>
            </Container>
            <Container
                maxWidth="xs"
                sx={{ pt: "16px", pb: "48px", position: "relative" }}
            >
                <Box>
                    <Typography mb={"30px"} variant="h5">
                        Популярные бренды
                    </Typography>
                    <Stack width={"400px"} direction={"row"} gap={"40px"}>
                        {brands?.slice(0, 6).map((item) => {
                            return <Brands key={item.id} {...item} />;
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};
