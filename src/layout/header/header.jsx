import { Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { PhoneIcon } from '../../assets/icons/phone-icon'
import Logo from '../../assets/logo.svg'
import { theme } from '../../config/mui-config'
import { colors } from '../../config/colors'
import { Profile } from '../../assets/icons/profile'
import { HeaderIcon } from '../../assets/icons/header-icon'
import { Form } from '../../components/form'

export const Header = () => {
  return (
    <Container maxWidth="xs" sx={{pb: '18px'}}>
      <Stack>
        <Stack alignItems={"center"} pt={'8px'} pb={'8px'} justifyContent={'end'} gap={'24px'} direction={"row"}>
          <Typography>Доставка и оплата</Typography>
          <Typography>Пункты выдачи</Typography>
          <Typography>Поддержка</Typography>
          <Stack alignItems={'center'} gap={'16px'} direction={"row"}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <Typography>+998 90 253 77 53</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt={'18px'} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack>
          <img src={Logo} alt="logo" />
        </Stack>
        <Stack direction={"row"} gap={'32px'}>
          <Button startIcon={<HeaderIcon/>} variant='contained'>Каталог</Button>
          <Form/>
        </Stack>
        <Stack direction={"row"} gap={'32px'} alignItems={"center"}>
          <Stack >
            <IconButton>
              <Profile />
            </IconButton>
            <Typography>Войти</Typography>
          </Stack>
          <Stack>
            <IconButton>
              <Profile />
            </IconButton>
            <Typography>Избранное</Typography>
          </Stack>
          <Stack>
            <IconButton>
              <Profile />
            </IconButton>
            <Typography>Корзина</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
