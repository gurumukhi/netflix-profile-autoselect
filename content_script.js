let storageItem = browser.storage.local.get();
storageItem.then((result) => {
    const profileToSelect = result.netflixDefaultProfile;
    if (document.querySelector('ul.choose-profile')) {
        if (!profileToSelect) {
            document.querySelector('ul.choose-profile').children[0].querySelector('.profile-link').click();
        } else {
            profiles = document.querySelector('ul.choose-profile').children;
            for (i=0; i<profiles.length; i++) {
                profileName = profiles[i].querySelector('span.profile-name').innerHTML;
                if(profileName === profileToSelect) {
                    profiles[i].querySelector('a.profile-link').click();
                    break;
                }
            }
            if (i === profiles.length) {
                console.warn('Profile name given in netflix profile add-on was not found. Selecting first profile.');
                document.querySelector('ul.choose-profile').children[0].querySelector('.profile-link').click();
            }
        }
    }
}).catch((error) => {
    console.warn('Selecting first profile as Netflix profile add-on could not fetch your preference of profile because of following error - ' + error);
    document.querySelector('ul.choose-profile').children[0].querySelector('.profile-link').click();
});