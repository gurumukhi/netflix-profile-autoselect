function saveOptions(e) {
    browser.storage.sync.set({
      profilename: document.querySelector("#profilename").value
    });
    e.preventDefault();
  }

  function restoreOptions() {
    var storageItem = browser.storage.managed.get('profilename');
    storageItem.then((res) => {
      document.querySelector("#managed-colour").innerText = res.colour;
    });
  
    var gettingItem = browser.storage.sync.get('profilename');
    gettingItem.then((res) => {
      document.querySelector("#profilename").value = res.profilename || 'Firefox red';
    });
  }
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);