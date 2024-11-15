import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Stack, Typography } from '@mui/material'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import { useGetCatalog } from './service/query/useGetCatalog';
import { Catalog } from '../../components/catalog';
import { Banner } from '../../components/banner/banner';
import { useGetPhones } from './service/query/useGetPhones';
import { ProductCard } from '../../components/product-card';
import './home.css'


export const Home = () => {
  const { data } = useGetCatalog()
  const { data: phone } = useGetPhones()
  return (
    <Box>
      <Banner />
      <Container maxWidth="xs">
        <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
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
      <Container maxWidth="xs" sx={{ pt: "16px", pb: "48px" ,position:"relative"}} >
        <Stack >
          <Typography mb={'24px'} variant='h5'>Смартфоны и планшеты</Typography>
          <Stack  direction={"row"} gap={"24px"}>
          <Swiper modules={[Pagination,Scrollbar, Navigation ]}
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
    </Box>
  )
}
