ProviderList.jsx ->
    Will own ALL of the rendering of the providers
    - On page load, this will be a get request to get ALL providers and will set the providers reducer with 'SET_PROVIDERS'

ProviderSearchBar ->
    This is where they type in the name of the provider they are looking for.

    Here, you collect the user's input. Send this to some kind of saga.
    That saga will to a try...GET to the backend.
    The backend will do a get request for that name of provider
    When you get your result back, your redux saga will update the PROVIDER reducer with 'SET_PROVIDERS'.
        Since this is the only place where you map through and render providers, this portion of your app will re-render!

Multiselect ->
    Your use will select one or more specializations. Store those things in an array (probably by `id`): [1,8,9,12]
    This will then do a get request with your array as parameters (this will be a more complicated get request - ask for help if you can't get it after about 30-40 minutes!)
    When you get your result back, your redux saga will update the PROVIDER reducer with 'SET_PROVIDERS'.
        Since this is the only place where you map through and render providers, this portion of your app will re-render!   