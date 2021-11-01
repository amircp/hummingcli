const { program } = require('commander');
const term = require( 'terminal-kit' ).terminal ;
const figlet = require('figlet');
const axios = require('axios');



figlet('Hummingbird', function(err, data) {
 	console.log(data);
 });


program
	.version('0.0.1')
	.description('Humming bird command line interface.');

function getTwoLevelDoM(value, previous) {
	const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImJyb2tlcnMiOlt7InBvcnRmb2xpb3MiOltdLCJfaWQiOiI2MGY0OThiZDE1ZDcxNDdlMmE5Y2YxNzciLCJuYW1lIjoiR0JNIC0gR3J1cG8gQnVyc2F0aWwgTWV4aWNhbm8iLCJicm9rZXJUeXBlIjoiU1RPQ0tTIiwidXNlcm5hbWUiOiJVMkZzZEdWa1gxODArSEc2TjlXUkNmcmZoOEcvT3NiTE14N2F1bGllMllHcW1UMWs0Yzd5VHFmTk9uVzk1dUFsIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxODI1MnJWVzVrd3dVbnNCNXp1aDRyQ1dlM3NWd3R5U05zPSIsImJyb2tlcklEIjoiR0JNIiwiYWNjb3VudElkIjoiNmE4ZjBmNzYtMGVjYS00MTNlLTg3YzUtYTA4N2ZlZTY1ZGY0IiwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xOFQyMToxMDoyMS4xMjBaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNDo1NjoxNy4wMTdaIiwiX192IjowLCJ0b2tlbiI6IlUyRnNkR1ZrWDErV3dLQ3l0am1yZUhZWjU4cDBLSFBBVWJxZDZ6QzNGMU1vWmFYRUpzdGFvaGhzSDhBMExLRVl3bjRFQ0NhTjI0Q3ZrdkcwNWZxRFpQc1F6bTMrWW1ZV3ZGRXNRandrUG1PZS9JZGtkQlorV1FjQkljMWY4ZmhkdjJ5UFd1OTdjOGxWMXJKV2ZkclIzSEhWeU9qVHg2SnRXOENhcTFndmVIVVg5SXNNaWx2SGNTQ0xxeVkrMGN1NmJSdkF6TkVoK1JHWkRPaHM5NlV0MGRTYkdlU2t5VFBGNGVWT0dHcTdleWhjWXd2aTBabnluZVFnTDlSVmFkcllHZTJqRXVDbnB2UnJMVjZvaDBUazlrVkpnVlVnTFZobFBvYUlpYVFic0J3T3FzRktjc0J3bFZyVjFUQXY0Rmd3eWRIMVE0SmozbVpvbzVBR2Z1Z1VZcklzNlJTeTQ1OFdhRzA5dVluL0RpRURlQ3NrQ3drQ0QxWTFEbzQ0YUVRZXBiTEhPL0E4U3J6T1I0QlNObFJuMkJ4ZDRKbVBaS3J1eGFJcmE2dTVmTXA3ek5MMmhiLzRzRDhuRG9UYmlkc3VIRW1GTXk4bW5BUTdhME11Ym9xbXd0SkttdGVoWm9XdENoVFhWSWdjWkxUQjBkcFZkVFdoaXd1anM3akNnS3hOdlJodzhNY0lQeWVMK0hsVHRaRnBrY3l3cFZkMDJ5dFo3Y0FqVU5pVmtxWHVBa0lGdmUxZEkrRDJ2eUZ2a2VjbXhPV2dJRG1Ub2VoTmdvNTFKTG42UklaaGV2UkpaZkhXYlJiY3dNWEJHT2RWVDJ1VVo5bVFCeXZ6L0NtNWxKekdyNWpEOGh1dW5SUFhVblBITXVuM0Q3bkYvY1gzS25tQkZIdFc5cFFqaTN2OFludG56dzRJeFlOZVNCTUhGdFBDOSs3S2Z2VHFIRmlZYnVTeHUyYWVNUkF0YTJKc1NxWFpza2V4MDdxNEEyOTFZY09UQ2xwaDVnZmY5d0dUZ2sxelFCRkI3ZkJrbXNoekxmY1VWMFdoT3F4d3ZLZDlmUC9zWWl0OCt2VmVZTUVSQ080c1h4VzBrRHhsS0o3d2ZmVkdVbW9hb2JoV1cySDVLVGpRTzZlUnp2aXQzb1RrNkRXV0N0V3hCNXc5Q1pnV0l6VkFzRmh3Mk1pNGlyZ20wa1EybzM2MTZLM1pUTjhJQlpzbC91WmVFbDFqbUdLeUlON1o4OWZ3V0k2Wm43eTQ5MGR0bWZHcUxIeU9WbzNxNkxHR1o5bzJWR0JGQmdmSXB0UVhLUjFUVm5sdlEwQ1grQ3gzWHRxd1hqMGtteU1yOGdhSnRGRkFRNnY3M1hFN3ZFQ0ZBU2ppL2J3cGhSd0t1VFk5SW5BR29VYUtkS0d3T2cyV2NGMVRYZ1NYQTRkeit5ckxRUDMvVU9PNUZrd29uSGpvLzhOM3Z2ZzF1cUFBaFcyV2x4UXVaT3F1bHNZa0E2RXM4b1ptUlJYRFQ2ZU9RT29iN2FvQWhsTWxEZC82S21NeTFaai9QZmRrcjR1T1h1V3RmdDVQUHVzalkzamhIZ3NpaWhHdzVqRzlicGZaUkJObnpnU2sxOGpDWUoycTJGRXdBVUx0VkxkdkVKdFZTLysybmpRR3I4TkdLZUlXUGx4RG52a2JZcXcwMktXaGJzb3NmZ0Y4WGpZM1dHb1dxREFmVWhUSEJsSDBmanc3cUxTRTdIS2NzV0NFREVuS0licnZ6RmZySXFGRHJqKzVKM0lPMVFidEhaVXNCUUJKbG5BSyIsInRva2VuX2V4cCI6IjIwMjEtMDktMjhUMTU6NTY6MTQuMDAwWiJ9XSwiX2lkIjoiNjBmNDk1ZTg4YWJmNmI3ZDY0Y2ExNTgwIiwidXNlcm5hbWUiOiJhbWlyY3AiLCJ1c2VyVHlwZSI6IkFETUlOIiwiZnVsbE5hbWUiOiJBbWlyIENhbnRvIFBhbG9tbyIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMThUMjA6NTg6MTYuNTc5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMThUMjE6MTA6MjEuMjE3WiIsIl9fdiI6MX0sImlhdCI6MTYzNTEyNDc5MSwiZXhwIjoxNjQyOTAwNzkxfQ.BzPNI28vBteTFWoetBMbpdRoJB1I0T3ReCoUGMVI9fs'

    axios.get('http://localhost:5500/api/gbm/tickers/level-two?market=SIC&ticker='+value, {
    headers: {
        'Authorization': `Bearer ${access_token}`
    }
    })
    .then((res) => {
		
		let mainTable = [];
		mainTable.push([ ' ^eSize ' , ' ^BBid ' , ' ^RAsk ', ' ^eSize ' ]);
		for(let i = 0; i < res.data.data.dom.length; i++) {
			mainTable.push(['^Y'+res.data.data.dom[i].ask_size, '^G$'+res.data.data.dom[i].ask, '^G$'+res.data.data.dom[i].bid , '^Y'+res.data.data.dom[i].bid_size]);
		}


		term.table( mainTable, {
			hasBorder: true ,
			contentHasMarkup: true ,
			borderChars: 'lightRounded' ,
			borderAttr: { color: 'blue' } ,
			textAttr: { bgColor: 'default' } ,
			width: 60 ,
			height: 15,
			fit: false, // Activate all expand/shrink + wordWrap
			expandToWidth: true
		});
		
   	})
    .catch((error) => {
    console.error(error)
    })

/*
	
) ;*/
}


function  listPortfolios() {
	const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImJyb2tlcnMiOlt7InBvcnRmb2xpb3MiOltdLCJfaWQiOiI2MGY0OThiZDE1ZDcxNDdlMmE5Y2YxNzciLCJuYW1lIjoiR0JNIC0gR3J1cG8gQnVyc2F0aWwgTWV4aWNhbm8iLCJicm9rZXJUeXBlIjoiU1RPQ0tTIiwidXNlcm5hbWUiOiJVMkZzZEdWa1gxODArSEc2TjlXUkNmcmZoOEcvT3NiTE14N2F1bGllMllHcW1UMWs0Yzd5VHFmTk9uVzk1dUFsIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxODI1MnJWVzVrd3dVbnNCNXp1aDRyQ1dlM3NWd3R5U05zPSIsImJyb2tlcklEIjoiR0JNIiwiYWNjb3VudElkIjoiNmE4ZjBmNzYtMGVjYS00MTNlLTg3YzUtYTA4N2ZlZTY1ZGY0IiwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xOFQyMToxMDoyMS4xMjBaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNDo1NjoxNy4wMTdaIiwiX192IjowLCJ0b2tlbiI6IlUyRnNkR1ZrWDErV3dLQ3l0am1yZUhZWjU4cDBLSFBBVWJxZDZ6QzNGMU1vWmFYRUpzdGFvaGhzSDhBMExLRVl3bjRFQ0NhTjI0Q3ZrdkcwNWZxRFpQc1F6bTMrWW1ZV3ZGRXNRandrUG1PZS9JZGtkQlorV1FjQkljMWY4ZmhkdjJ5UFd1OTdjOGxWMXJKV2ZkclIzSEhWeU9qVHg2SnRXOENhcTFndmVIVVg5SXNNaWx2SGNTQ0xxeVkrMGN1NmJSdkF6TkVoK1JHWkRPaHM5NlV0MGRTYkdlU2t5VFBGNGVWT0dHcTdleWhjWXd2aTBabnluZVFnTDlSVmFkcllHZTJqRXVDbnB2UnJMVjZvaDBUazlrVkpnVlVnTFZobFBvYUlpYVFic0J3T3FzRktjc0J3bFZyVjFUQXY0Rmd3eWRIMVE0SmozbVpvbzVBR2Z1Z1VZcklzNlJTeTQ1OFdhRzA5dVluL0RpRURlQ3NrQ3drQ0QxWTFEbzQ0YUVRZXBiTEhPL0E4U3J6T1I0QlNObFJuMkJ4ZDRKbVBaS3J1eGFJcmE2dTVmTXA3ek5MMmhiLzRzRDhuRG9UYmlkc3VIRW1GTXk4bW5BUTdhME11Ym9xbXd0SkttdGVoWm9XdENoVFhWSWdjWkxUQjBkcFZkVFdoaXd1anM3akNnS3hOdlJodzhNY0lQeWVMK0hsVHRaRnBrY3l3cFZkMDJ5dFo3Y0FqVU5pVmtxWHVBa0lGdmUxZEkrRDJ2eUZ2a2VjbXhPV2dJRG1Ub2VoTmdvNTFKTG42UklaaGV2UkpaZkhXYlJiY3dNWEJHT2RWVDJ1VVo5bVFCeXZ6L0NtNWxKekdyNWpEOGh1dW5SUFhVblBITXVuM0Q3bkYvY1gzS25tQkZIdFc5cFFqaTN2OFludG56dzRJeFlOZVNCTUhGdFBDOSs3S2Z2VHFIRmlZYnVTeHUyYWVNUkF0YTJKc1NxWFpza2V4MDdxNEEyOTFZY09UQ2xwaDVnZmY5d0dUZ2sxelFCRkI3ZkJrbXNoekxmY1VWMFdoT3F4d3ZLZDlmUC9zWWl0OCt2VmVZTUVSQ080c1h4VzBrRHhsS0o3d2ZmVkdVbW9hb2JoV1cySDVLVGpRTzZlUnp2aXQzb1RrNkRXV0N0V3hCNXc5Q1pnV0l6VkFzRmh3Mk1pNGlyZ20wa1EybzM2MTZLM1pUTjhJQlpzbC91WmVFbDFqbUdLeUlON1o4OWZ3V0k2Wm43eTQ5MGR0bWZHcUxIeU9WbzNxNkxHR1o5bzJWR0JGQmdmSXB0UVhLUjFUVm5sdlEwQ1grQ3gzWHRxd1hqMGtteU1yOGdhSnRGRkFRNnY3M1hFN3ZFQ0ZBU2ppL2J3cGhSd0t1VFk5SW5BR29VYUtkS0d3T2cyV2NGMVRYZ1NYQTRkeit5ckxRUDMvVU9PNUZrd29uSGpvLzhOM3Z2ZzF1cUFBaFcyV2x4UXVaT3F1bHNZa0E2RXM4b1ptUlJYRFQ2ZU9RT29iN2FvQWhsTWxEZC82S21NeTFaai9QZmRrcjR1T1h1V3RmdDVQUHVzalkzamhIZ3NpaWhHdzVqRzlicGZaUkJObnpnU2sxOGpDWUoycTJGRXdBVUx0VkxkdkVKdFZTLysybmpRR3I4TkdLZUlXUGx4RG52a2JZcXcwMktXaGJzb3NmZ0Y4WGpZM1dHb1dxREFmVWhUSEJsSDBmanc3cUxTRTdIS2NzV0NFREVuS0licnZ6RmZySXFGRHJqKzVKM0lPMVFidEhaVXNCUUJKbG5BSyIsInRva2VuX2V4cCI6IjIwMjEtMDktMjhUMTU6NTY6MTQuMDAwWiJ9XSwiX2lkIjoiNjBmNDk1ZTg4YWJmNmI3ZDY0Y2ExNTgwIiwidXNlcm5hbWUiOiJhbWlyY3AiLCJ1c2VyVHlwZSI6IkFETUlOIiwiZnVsbE5hbWUiOiJBbWlyIENhbnRvIFBhbG9tbyIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMThUMjA6NTg6MTYuNTc5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMThUMjE6MTA6MjEuMjE3WiIsIl9fdiI6MX0sImlhdCI6MTYzNTEyNDc5MSwiZXhwIjoxNjQyOTAwNzkxfQ.BzPNI28vBteTFWoetBMbpdRoJB1I0T3ReCoUGMVI9fs'

    axios.get('http://localhost:5500/api/gbm/portfolio', {
    headers: {
        'Authorization': `Bearer ${access_token}`
    }
    })
    .then((res) => {
		
		let mainTable = [];
		mainTable.push([ ' ^eName ' , ' ^eCapital ' , ' ^ePnL ', ' ^ePnl %' ]);
		for(let i = 0; i < res.data.data.length; i++) {
			mainTable.push(['^Y'+res.data.data[i].name, '^G$'+res.data.data[i].position.amount, '^G$'+res.data.data[i].plus_minus.amount , '^Y'+res.data.data[i].plus_minus_percentage]);
		}


		term.table( mainTable, {
			hasBorder: true ,
			contentHasMarkup: true ,
			borderChars: 'lightRounded' ,
		
			textAttr: { bgColor: 'default' } ,
			width: 60 ,
			height: 10,
			fit: false, // Activate all expand/shrink + wordWrap
			expandToWidth: true
		});
		
   	})
    .catch((error) => {
    console.error(error)
    })
}
/*
	
) ;*/


program
	.option('-l, --levelone <ticker>','Shows Level One Depth Of Market for a specific stock', getTwoLevelDoM)
	.option('-t, --leveltwo <ticker>','Shows Level Two Depth Of Market for a specific stock', getTwoLevelDoM)
	.option('-t, --ticker <ticker>','Shows last quotes for ticker', getTwoLevelDoM)
	.option('-lp, --listportfolios', 'Shows portfolios information', listPortfolios)
	.option('-b, --buylimit <ticker ...>','Buy limit order ', getTwoLevelDoM)
	.option('-s, --selllimit <ticker ...>','Sell limit order', getTwoLevelDoM)
	.parse();


const options = program.opts();



