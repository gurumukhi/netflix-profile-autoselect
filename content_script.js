// Put all the javascript code here, that you want to execute after page load.

// https://www.netflix.com/browse

try {
    if (document.querySelector('ul.choose-profile')) {
        let profileToSelect = ''; //window.autoSelectProfileName;

        if (!profileToSelect) {
            // choose first profile
            document.querySelector('ul.choose-profile').children[0].querySelector('.profile-link').click();
            alert('selected');
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
                console.warn('Profile name didnt found');
            }
        }
    }
}
catch (error) {
    console.warn(error);
}