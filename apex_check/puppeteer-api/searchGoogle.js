const puppeteer = require('puppeteer');

const searchGoogle = async (searchQuery) => {
    const browser = await puppeteer.launch({
    headless: true,
//    executablePath:'/home/sagar/workplace/scraping-demo/node_modules/puppeteer/.local-chromium/linux-599821/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

    const page = await browser.newPage();
    // await page.goto(searchQuery);

    // //Finds input element with name attribue 'q' and types searchQuery
    // await page.type('input[name="q"]', searchQuery);

    // //Finds an input with name 'btnK', after so it executes .click() DOM Method
    // await page.$eval('input[name=btnK]', button => button.click());
    
    // //Wait for one of the div classes to load
    // await page.waitForSelector('div[id=search]');

    // const searchResults = await page.$$eval('div[class=bkWMgd]', results => {
    //     //Array to hold all our results
    //     // let data = [];
    //     //Return the search results
    //     // return data;
        
    //     return results
    // });
    // await page.screenshot({path:'example.png'});
    // await browser.close();

    // return searchResults;
      
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
    // await page.setViewport({ width: 375, height: 812 });
  // page.on('request', (request) => {
  //   console.log(`Intercepting: ${request.method} ${request.url}`);
  //   request.continue();
  // });
  
  await page.goto(searchQuery, { waitUntil: 'load' });
  // await page.goto(url, { waitUntil: 'domcontentloaded' });
  // await page.goto(url, { waitUntil: 'networkidle0' });
  // await page.goto(url, { waitUntil: 'networkidle2' });
  //const title = await page.title();
  //console.log(title);
  // const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  // await sleep(3000);

//   await page.screenshot({path:'../http-observatory-website/src/images/example.png'});
await page.screenshot({path:'../http-observatory-website/build/images/example.png'});
  const html = await page.content();
  console.log("html: ",typeof html)
  // console.log(html);
  var finalResults = []
  var descriptions = ["Information storage and access", "Personalisation", "Ad selection, delivery, reporting", "Content selection, delivery, reporting", "Measurement","priority", "cookies","privacy","cookie-consent","cookie-banner"];
//   var descriptions_long = [...descriptions ,"The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies.", "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content.", "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time.", "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time.", "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."];
  for(var description of descriptions){
    // for(var descriptions_long_one of descriptions_long){
      var reg1 = new RegExp(description, "i")
    //   var reg2 = new RegExp(description, "i")
      if(reg1.test(html)){
        // console.log("description found!!",description, descriptions_long_one)
        console.log("description found!!", description)
        finalResults.push(`description found for domain: ${searchQuery} with keyword: ${description}`)
      }
      
    }
  // }
  
  browser.close();
//   var resultObj = {
//       "message": JSON.stringify(finalResults)
//   }
  
    

  return JSON.stringify(finalResults);
};

module.exports = searchGoogle;