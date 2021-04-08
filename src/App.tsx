import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTRansactionModal";
import {TransactionsProvider} from '../src/hooks/useTransactions'
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen]= useState(false);

  function handleOpenTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseTransactionModal}  />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

