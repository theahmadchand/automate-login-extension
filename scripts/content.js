let currentWebsite = window.location.hostname;

// Create an instance of MutationObserver and pass a callback function
const observer = new MutationObserver(() => {
    if (currentWebsite === "hrc.ili.digital") tryLogin();
    else if (currentWebsite === "github.com") tryContinue();
    else alert("Hostname did not match any known websites");
});

// Specify what to observe (target node and options)
observer.observe(document.body, { childList: true, subtree: true });

// Optionally, you can stop observing after a certain condition is met or after a timeout to avoid infinite observation
setTimeout(() => observer.disconnect(), 10000); // Stop observing after 10 seconds as a fallback
