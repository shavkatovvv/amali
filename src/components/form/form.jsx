import { Stack, TextField } from '@mui/material'
import React from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useSearch } from '../../service/useSearch'

export const Form = () => {
  const [input, setInput] = React.useState('')
  
  const debounceValue = useDebounce(input)
  
  const { data, isLoading } = useSearch(debounceValue)

  return (
    <Stack position={'relative'}>
        <TextField value={input} onChange={(e) => setInput(e.target.value)} variant='outlined' sx={{ width: '673px' }} placeholder='Поиск' />
      {isLoading ? (
        <div color='#fff'>Loading...</div>
      ) : (
        <Stack zIndex={5} position={'absolute' } top={'80px'}  width={'100%'} boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
          {data.map((item) => (
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'20px'}
              bgcolor={'#fff'}
              key={item.id}
              p={'20px'}
              border={'1px solid grey'}
            >
              <img style={{ width: '150px' }} src={item.img} alt="img" />
              <h3>{item.title}</h3>
            </Stack>
          ))}
        </Stack>
      )}

    </Stack>
  )
}
