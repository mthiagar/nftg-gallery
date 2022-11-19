import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { Network, Alchemy } from "alchemy-sdk";
require('dotenv').config()



const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] =useState([]);

  const fetchNFTs = async() => {
    let nfts;
    console.log("fetching nfts");
    if(!collection.length) {

      const settings = {
        apiKey: process.env.ALCHEMY_APIKEY, // Replace with your Alchemy API Key.
        network: process.env.NETWORKURL // Replace with your network.
      };
      
      const alchemy = await new Alchemy(settings);

  
      nfts = await alchemy.nft.getNftsForOwner(wallet);
    } else {

    }
    if (nfts) {
      console.log(nfts)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <div>
        <input onChange={(e)=>{setWalletAddress(e.target.value)}} value={wallet} type={"text"} placeholder="Add your wallet address"></input>
        <input onChange={(e)=>{setCollectionAddress(e)}} type={"text"} placeholder="Add the collection address"></input>
        <label><input type={"checkbox"}></input></label>
        <button onClick={
          () => {
             fetchNFTs()
          }
        }>Let's go! </button>
      </div>
    </div>
  )
}

export default Home
