window.omload = function(){
    if(window.ethereum !== "undefined" ){
        this.ethereum.on("accountsChanged", handleAcconutsChanged)
    }
}

let accounts;

const handleAcconutsChanged = (a) => {
    console.log("accounts changes")
    accounts = a
}

async function connectWallet()
{
    accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err)=>{
    //error handling
    console.log(err.code)
})


console.log(accounts)
alert("Wallet Connected, Address : "+accounts)
}

async function checkBalance(){
    let balance = await window.ethereum.request({method: "eth_getBalance",
        params : [
             accounts[0],
            'latest'
        ]
}).catch((err)=>{
    console.log(err.code)
})
let a = parseInt(balance)/ Math.pow(10,18)
console.log(a)
alert("Ether Balance: "+a)

}

async function sendTransaction(){

    let params= [
        {
          from: "0x86F92eBAAbD05F5D9BCB2ddAa525B44c726b0c00",
          to: "0xe0d9f554058923Da004cEFf7310941e80Abb3d2d",
          gas: Number(0).toString(16), 
          gasPrice: Number(0).toString(16), 
          value: Number(0).toString(16)
        },
      ]
      

    let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        console.log(err)
    })
}