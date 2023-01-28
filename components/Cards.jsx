'use client';

import { useState } from 'react';

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box, Flex } from "@chakra-ui/react"

export default function Test() {
  return (
    <>
    <Box display="row" alignItems="center" justifyContent="space-between">

        <Heading color='#0B0641' my={6} >Simple pricing for your business</Heading>
        <Text fontSize='md' color='#FF1D89'> Plans that are carefully crafted to suit your business.</Text>

        <SimpleGrid my={8} spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Basic</Heading>
    </CardHeader>
    <CardBody>
      <Text>What You’ll Get</Text>
    </CardBody>
    <CardFooter>
      <Button>Choose</Button>
    </CardFooter>
  </Card>
  <Card  bg='#0B0641'>
    <CardHeader>
      <Heading color='#ffffff' size='md'> Premium </Heading>
    </CardHeader>
    <CardBody>
      <Text color='#ffffff'>What You’ll Get</Text>
    </CardBody>
    <CardFooter>
      <Button color='#ffffff' bg='#FF1D89' >Choose</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Premium PRO</Heading>
    </CardHeader>
    <CardBody>
      <Text>What You’ll Get</Text>
    </CardBody>
    <CardFooter>
      <Button>Choose</Button>
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
