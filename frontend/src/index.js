import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ApolloProvider} from '@apollo/client'
import {apolloClient} from './api/config'

ReactDOM.render(<ApolloProvider client={apolloClient}><App></App></ApolloProvider>, document.getElementById('root'))
