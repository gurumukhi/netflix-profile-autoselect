function saveOptions(e) {
    browser.storage.local.set({
        netflixDefaultProfile: document.querySelector("#profilename").value
    });
    e.preventDefault();
}

function restoreOptions() {
    var storageItem = browser.storage.local.get();
    storageItem.then((value) => {
        document.querySelector("#profilename").value = value.netflixDefaultProfile;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("#save").addEventListener("click", saveOptions);