'use client';

import { useState } from 'react';

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, StackDivider, Box, } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Test() {
  // const [count, setCount] = useState(0);

  return (
    <>
        <Heading color='#0B0641' >Simple pricing for your business</Heading>
        <Text fontSize='md' color='#FF1D89'> Plans that are carefully crafted to suit your business.</Text>

        <p>Plans that are carefully crafted to suit your business.</p>
        <Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
<Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>

  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </>
  )
}
