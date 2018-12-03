module.exports = {
    networks: {
        development: {
            // For trontools/quickstart docker image
            privateKey: 'de56388af7c4a66b770896c8a475f81719198e0efb28a120c682a44b1c519d79',
            consume_user_resource_percent: 30,
            fee_limit: 100000000,
            fullNode: "http://127.0.0.1:8090",
            solidityNode: "http://127.0.0.1:8091",
            eventServer: "http://127.0.0.1:8092",
            network_id: "*"
        },
        testnet: {
            from: 'TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY',
            privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
            consume_user_resource_percent: 30,
            fee_limit: 100000000,
            host: "https://api.trongrid.io",
            port: 8090,
            fullNode: "https://api.shasta.trongrid.io",
            solidityNode: "https://api.shasta.trongrid.io",
            eventServer: "https://api.shasta.trongrid.io",
            network_id: "*" // Match any network id
        },
        mainnet: {
            // Don't put your private key here, pass it using an env variable, like:
            // PK=da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0 tronbox migrate --network mainnet
            privateKey: process.env.PK,
            consume_user_resource_percent: 30,
            fee_limit: 100000000,
            fullNode: "https://api.trongrid.io",
            solidityNode: "https://api.trongrid.io",
            eventServer: "https://api.trongrid.io",
            network_id: "*"
        }
    }
};
