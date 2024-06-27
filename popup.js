var voteCountsByUrl = {
};

var votes = Math.random() * 2048;

var query = { active: true, currentWindow: true };
function callback(tabs) {
    var currentTab = tabs[0]; // there will be only one in this array
    console.log(currentTab); // also has properties like currentTab.id
    var type = "REAL";
    if( currentTab.url === "https://www.linkedin.com/jobs/view/3956539323/") {
        type = "FAKE";
        document.getElementById("community-fake-count").innerHTML = Math.floor( votes * 2 );
        document.getElementById("community-real-count").innerHTML = Math.floor( votes );
    }
    else {
        document.getElementById("community-fake-count").innerHTML = Math.floor( votes );
        document.getElementById("community-real-count").innerHTML = Math.floor( votes * 2 );
    }
    document.getElementById("expert").innerHTML = type;
}
chrome.tabs.query(query, callback);