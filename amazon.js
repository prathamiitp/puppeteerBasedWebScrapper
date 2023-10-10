import puppeteer from "puppeteer";
import { setTimeout } from "timers/promises";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://amazon.com/");

  // Type into search box
  await page.type("#twotabsearchtextbox", "baseball");
  await page.click("#nav-search-submit-button");

  await page.waitForNavigation();

  // // Gather product title
  // const title = await page.$$eval("h2 span.a-color-base", (nodes) =>
  //   nodes.map((n) => n.innerText)
  // );

  // // Gather price
  // const price = await page.$$eval(
  //   "[data-component-type='s-search-result'] span.a-price[data-a-color='base'] span.a-offscreen",
  //   (nodes) => nodes.map((n) => n.innerText)
  // );
   
  // // Consolidate product search data
  // const amazonSearchArray = title.map((value, index) => {
  //   return {
  //     title: title[index],
  //     price: price[index],
  //   };
  // });

  // const jsonData = JSON.stringify(amazonSearchArray, null, 2);
  // fs.writeFileSync("amazonSearchResults.json", jsonData);
  
  await setTimeout(5000);
  await browser.close();
})();
