if ((localStorage["onInstall"] != "false") && (localStorage["onInstall"] != false)){
	chrome.tabs.create({url: "https://www.jparcher.com/rain-on-me/thankyou", selected:true})
	localStorage["onInstall"] = false;
}
//on install checks if plugin has been newly installed or just updated - if new opens webpage to plugin thank you 