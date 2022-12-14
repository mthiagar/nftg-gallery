

export const NFTCard = ({ nft }) => {
    function copytext() {
        console.log('Click happened');
        var copyText = nft.contract.address;
        navigator.clipboard.writeText(copyText);
        console.log(`Copied address ${copyText}`);
      }

    return (
        <div className="w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway}></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div>
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600">{nft.tokenId}</p>
                    <p className="text-gray-600">{`${nft.contract.address.substr(0, 5)}...${nft.contract.address.substr(nft.contract.address.length -4)}`} <span id="copy-btn" title="Copy Contract Address"><img onClick={() => copytext()} src="/clipboard.png"></img></span></p>
                </div>
                

            <div>
                <p>{nft.description?.substr(0, 150)}</p>
            </div>
            <div className="flex justify-center mb-1">
                <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer">View on etherscan</a>
            </div>
        </div>
        </div>
    )
}


//        <p>{nft.id.tokenId}</p>        .subst(nft.tokenId.length - 4)
