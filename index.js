const { program } = require('commander');
const term = require( 'terminal-kit' ).terminal ;
const figlet = require('figlet');
const axios = require('axios');




// figlet('Hummingbird', function(err, data) {
// 	console.log(data);
// });

const mockData = [
            {
                "sequence": 1,
                "ask_order_number": 1,
                "ask": 148,
                "ask_size": 67,
                "bid_order_number": 0,
                "bid": 0,
                "bid_size": 0
            },
            {
                "sequence": 2,
                "ask_order_number": 2,
                "ask": 147,
                "ask_size": 2,
                "bid_order_number": 0,
                "bid": 0,
                "bid_size": 0
            },
            {
                "sequence": 3,
                "ask_order_number": 0,
                "ask": 0,
                "ask_size": 0,
                "bid_order_number": 0,
                "bid": 0,
                "bid_size": 0
            },
            {
                "sequence": 4,
                "ask_order_number": 0,
                "ask": 0,
                "ask_size": 0,
                "bid_order_number": 0,
                "bid": 0,
                "bid_size": 0
            },
            {
                "sequence": 5,
                "ask_order_number": 0,
                "ask": 0,
                "ask_size": 0,
                "bid_order_number": 0,
                "bid": 0,
                "bid_size": 0
            }
        ];
program
	.version('0.0.1')
	.description('Humming bird command line interface.');

function getTwoLevelDoM(value, previous) {

	let mainTable = [];
	mainTable.push([ ' ^eSize ' , ' ^BBid ' , ' ^RAsk ', ' ^eSize ' ]);
	for(let i = 0; i < mockData.length; i++) {
		mainTable.push(['^Y'+mockData[i].ask_size, '^G$'+mockData[i].ask, '^G$'+mockData[i].bid , '^Y'+mockData[i].bid_size]);
	}


	term.table( mainTable, {
		hasBorder: true ,
		contentHasMarkup: true ,
		borderChars: 'lightRounded' ,
		borderAttr: { color: 'blue' } ,
		textAttr: { bgColor: 'default' } ,
		width: 60 ,
		height: 30,
		fit: false, // Activate all expand/shrink + wordWrap
		expandToWidth: true
	}
) ;
}


program
	.option('-l, --levelone <ticker>','Shows Level One Depth Of Market for a specific stock', getTwoLevelDoM)
	.option('-t, --leveltwo <ticker>','Shows Level Two Depth Of Market for a specific stock', getTwoLevelDoM)
	.option('-t, --ticker <ticker>','Shows last quotes for ticker', getTwoLevelDoM)
	.option('-b, --buylimit <ticker ...>','Buy limit order ', getTwoLevelDoM)
	.option('-s, --selllimit <ticker ...>','Sell limit order', getTwoLevelDoM)
	.parse();


const options = program.opts();



