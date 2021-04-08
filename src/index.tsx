import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model } from 'miragejs'
import {App} from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          amount: 400,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2010-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 300,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2010-03-13 11:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
      /* return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ] */
    })
    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data)
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
