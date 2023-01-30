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

      <Box display="row" alignItems="center" justifyContent="space-between">

        <Heading textAlign='center' color='#0B0641' my={6}>Simple pricing for your business</Heading>
        <Text textAlign='center' fontSize='md' color='#FF1D89' justifyContent='center' mb={8}> Plans that are carefully crafted to suit your business.</Text>

        <SimpleGrid mt={12} columns={3} spacingX='20px' spacingY='20px'>
          <Card mt={5} w="100%">
            <CardHeader>
              <Heading size='md'> Basic</Heading>
            </CardHeader>
            <CardBody>
              <Text mb={5}>What You’ll Get</Text>
              <Flex className=''><CheckCircleIcon /> <Text>Edit up to 10 files.</Text></Flex>
              <Flex className=''><CheckCircleIcon /> <Text>Set your own Page</Text></Flex>

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
              <Text mb={5} color='#ffffff'>What You’ll Get</Text>
              <Flex className=''><CheckCircleIcon color='white' className='mr-2' /> <Text color='white'>Additional Phone numbers</Text></Flex>
              <Flex className=''><CheckCircleIcon color='white' /> <Text color='white'>Set your own landing page</Text></Flex>
              <Flex className=''><CheckCircleIcon color='white' /> <Text color='white'>24/7 support</Text></Flex>
            <Flex className=''> <CheckCircleIcon color='white' /> <Text color='white'>Advanced analytics</Text></Flex>

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
          <Text mb={5}>What You’ll Get</Text>
          <Flex className=''><CheckCircleIcon /> <Text className='pl-5'>Additional Phone numbers</Text></Flex>
        <Flex className=''><CheckCircleIcon /> <Text>Set your own landing page</Text></Flex>
      <Flex className=''><CheckCircleIcon  /> <Text>24/7 support</Text></Flex>
      <Flex className=''> <CheckCircleIcon  /> <Text>Advanced analytics</Text></Flex>

    </CardBody>
    <CardFooter  justifyContent='center'>
      <Button >Choose</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
</Box>


  )
}
