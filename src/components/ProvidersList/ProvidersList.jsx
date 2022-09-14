import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import ProvidersListItem from '../ProvidersListItem/ProvidersListItem';
import GroupsListItem from '../GroupsListItem/GroupsListItem';
import ProviderSearchBar from '../ProviderSearchBar/ProviderSearchBar';
import GroupSearchBar from '../GroupSearchBar/GroupSearchBar';
import SpecializationsDropdownMenu from '../SpecializationsDropDownMenu/SpecializationsDropdownMenu';
import OccupationsDropdownMenu from '../OccupationsDropDownMenu/OccupationsDropdownMenu';
import InsurancesDropdownMenu from '../InsurancesDropDownMenu/InsurancesDropdownMenu';

export default function ProvidersList() {
    const dispatch = useDispatch();
    const providersReducer = useSelector((store) => store.providers);
    const providers = providersReducer.providersReducer;
    const groupsReducer = useSelector((store) => store.groups);
    const groups = groupsReducer.groupsReducer
    const specializations = useSelector((store) => store.specializations);
    const insurances = useSelector((store) => store.insurances);
    const occupations = useSelector((store) => store.occupations);
    //dispatches for the provider and group list, as well as the information for the dropdowns.
    useEffect(() => {
        dispatch({ type: 'FETCH_PROVIDERS' });
        dispatch({ type: 'FETCH_GROUPS' });
        dispatch({ type: 'FETCH_SPECIALIZATIONS' });
        dispatch({ type: 'FETCH_INSURANCES' });
        dispatch({ type: 'FETCH_OCCUPATIONS' });
    }, []);

    //start of tab panel
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 0, m: 0 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </Box>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value, setValue] = React.useState(0);

    //end of tab panel
    return (
        <div>
            <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {/* TAB PANEL - PROVIDER AND GROUPS */}
                <Box sx={{ width: '100vw' }}>
                    <Box
                        id="tab-panel-container"
                        style={{
                            borderBottom: 1,
                            borderColor: 'divider',
                            backgroundColor: '#3a66c0',
                            color: 'white',
                        }}
                    >
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="provider and group tabs"
                            textColor="inherit"
                        >
                            <Tab label="Providers" {...a11yProps(0)} />
                            <Tab label="Group" {...a11yProps(1)} />
                        </Tabs>
                    </Box>

                    {/* TAB PANEL - SEARCH AND FILTER */}
                    <TabPanel value={value} index={0}>
                        <Box
                            id="search-filter-bar"
                            style={{
                                backgroundColor: 'var(--content)',
                                height: 'fit-content',
                                display: 'flex',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                marginBottom: '3rem',
                            }}
                        >
                            {/* COMPONENTS - SEARCH AND FILTER */}
                            <ProviderSearchBar />
                            <SpecializationsDropdownMenu />
                            <InsurancesDropdownMenu />
                            <OccupationsDropdownMenu />
                        </Box>

                        {/* CONTAINER - PROVIDER MAP */}
                        <Grid container spacing={3} id="provider-map">
                            <Grid item xs={12} sm={8} md={6} lg={6} xl={4}>
                                {providers.map((provider) => (
                                    <Grid item key={provider.id} xs={4}>
                                        <ProvidersListItem
                                            provider={provider}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </TabPanel>

                    {/* TAB PANEL - GROUPS */}
                    <TabPanel value={value} index={1}>
                        <Box
                            id="search-filter-bar"
                            style={{
                                backgroundColor: 'var(--content)',
                                height: 'fit-content',
                                display: 'flex',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                marginBottom: '3rem',
                            }}
                        >
                            <GroupSearchBar />
                        </Box>
                        {/* container for groups */}
                        <Grid container spacing={3} id="group-map">
                            <Grid item xs={12} sm={8} md={6} lg={6} xl={4}>
                                {groups?.map((group) => (
                                    <Grid item key={group.id} xs={4}>
                                        <GroupsListItem group={group} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Box>
            </Grid>
        </div>
    );
}
