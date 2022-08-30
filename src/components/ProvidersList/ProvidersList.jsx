import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProvidersListItem from '../ProvidersListItem/ProvidersListItem';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

//AVERY: DON'T TOUCH FILE

function ProvidersList() {


    const history = useHistory()
    const dispatch = useDispatch();
    const providers = useSelector(store => store.providers);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDERS' });
    }, []);

 
    return (
        <main>
            <h1>Provider</h1>
            <section
            //  className="providers"
             >
                <Grid container spacing={5}>
                {providers.map(provider => (
                        <Grid item key={provider.id} xs={2}>
                           <ProvidersListItem provider={provider}
                            />
                        </Grid>
                    )
                )}
                </Grid>

            </section>
        </main>

    );
                }

export default ProvidersList;
