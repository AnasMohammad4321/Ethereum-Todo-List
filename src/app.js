App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
    },
  
    loadWeb3: async () => {
        if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' });
            // Accounts now exposed
            web3.eth.sendTransaction({/* ... */});
          } catch (error) {
            // User denied account access...
          }
        } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      },      
  
    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
      console.log(App.account)
    }

  }
  
  document.addEventListener("DOMContentLoaded", () => {
    App.load();
 });
 