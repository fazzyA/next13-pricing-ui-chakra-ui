'use client';

import { useState } from 'react';

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box, Flex } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'



export default function Test() {
  return (
    <>
    <Box display="row" alignItems="center" justifyContent="space-between">

        <Heading textAlign='center' color='#0B0641' my={6}>Simple pricing for your business</Heading>
        <Text textAlign='center' fontSize='md' color='#FF1D89' justifyContent='center'> Plans that are carefully crafted to suit your business.</Text>

        <SimpleGrid my={8} columns={3} spacingX='20px' spacingY='20px'>
  <Card  mt={5} maxW='xl' >
    <CardHeader>
      <Heading size='md'> Basic</Heading>
    </CardHeader>
    <CardBody>
      <Text mb={5}>What You’ll Get</Text>
      <span className='d-flex'><CheckCircleIcon /> <Text>Edit up to 10 files.</Text></span>
      <span><CheckCircleIcon /> <Text>Set your own Page</Text></span>

    </CardBody>
    <CardFooter justifyContent='center'>
      <Button>Choose</Button>
    </CardFooter>
  </Card>
  <Card mb={5} bg='#0B0641'>
    <CardHeader>
      <Heading color='#ffffff' size='md'> Premium </Heading>
    </CardHeader>
    <CardBody>
      <Text  mb={5} color='#ffffff'>What You’ll Get</Text>
      <CheckCircleIcon color='white' /> <Text color='white'>Additional Phone numbers</Text>
      <CheckCircleIcon color='white' /> <Text color='white'>Set your own landing page</Text>
      <CheckCircleIcon color='white' /> <Text color='white'>24/7 support</Text>
      <CheckCircleIcon color='white' /> <Text color='white'>Advanced analytics</Text>

    </CardBody>
    <CardFooter justifyContent='center'>
      <Button color='#ffffff' bg='#FF1D89' >Choose</Button>
    </CardFooter>
  </Card>
  <Card mt={5}>
    <CardHeader>
      <Heading size='md'>
      {/* <span><RiAliensLinePremium /></span> */}
       PRO</Heading>
    </CardHeader>
    <CardBody>
      <Text  mb={5}>What You’ll Get</Text>
      <CheckCircleIcon color='white' /> <Text >Additional Phone numbers</Text>
      <CheckCircleIcon color='white' /> <Text >Set your own landing page</Text>
      <CheckCircleIcon color='white' /> <Text>24/7 support</Text>
      <CheckCircleIcon color='white' /> <Text>Advanced analytics</Text>

    </CardBody>
    <CardFooter  justifyContent='center'>
      <Button >Choose</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
</Box>
{/* <SimpleGrid my={8} columns={[2, null, 3]} spacing='40px'>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>

</SimpleGrid> */}

    </>
  )
}
