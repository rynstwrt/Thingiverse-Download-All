chrome.action.onClicked.addListener(async tab =>
{
    try
    {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["scripts/content.js"]
        })
    }
    catch (err)
    {
        console.error(`Failed to run ${err}`);
    }
})