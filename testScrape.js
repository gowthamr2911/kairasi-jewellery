async function test() {
  try {
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.livechennai.com/gold_silverrate.asp')}`);
    const data = await res.json();
    const html = data.contents;
    
    // Find gold rate
    const match = html.match(/22\s*Carat.*?<td[^>]*>.*?<td[^>]*>.*?<td[^>]*>\s*([0-9,.]+)/is);
    console.log("Match:", match?.[1]);
  } catch (e) {
    console.log("Error:", e.message);
  }
}
test();
