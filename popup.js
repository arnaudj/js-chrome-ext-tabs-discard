const tabs = await chrome.tabs.query({discarded: false});
//console.log("Got tabs:", tabs)

document.getElementById('nbtabs').innerText = tabs.length;

document.querySelector('button').addEventListener('click', async () => {
  tabs.forEach(async tab => {
    await chrome.tabs.discard(tab.id);
  });
});
