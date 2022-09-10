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
import './ProvidersList.css';
import ProviderSearchBar from '../ProviderSearchBar/ProviderSearchBar';
import GroupSearchBar from '../GroupSearchBar/GroupSearchBar';
import SpecializationsDropdownMenu from '../SpecializationsDropDownMenu/SpecializationsDropdownMenu';
import OccupationsDropdownMenu from '../OccupationsDropDownMenu/OccupationsDropdownMenu';
import InsurancesDropdownMenu from '../InsurancesDropDownMenu/InsurancesDropdownMenu';

function ProvidersList() {
    const dispatch = useDispatch();
    const providersReducer = useSelector((store) => store.providers);
    const providers = providersReducer.providersReducer;
    const groups = useSelector((store) => store.groups);
    //dispatches for the detail of the clicked on provider/group
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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //end of tab panel
    return (
        <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {/* "tab-panel-container" */}
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
                        <Tab label="Provider" {...a11yProps(0)} />
                        <Tab label="Group" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                {/* Tab panel 1-Provider */}
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
                        {/* Search text field for the provider */}
                        <ProviderSearchBar />
                        <SpecializationsDropdownMenu />
                        <InsurancesDropdownMenu />
                        <OccupationsDropdownMenu />
                    </Box>

                    {/* container for providers */}
                    <Grid container spacing={3} id="provider-map">
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={4}>
                            {providers.map((provider) => (
                                <Grid item key={provider.id} xs={4}>
                                    <ProvidersListItem provider={provider} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* Tab panel 2-Group */}

                <TabPanel value={value} index={1}>
                    <header>
                        <span>
                            <span
                                style={{
                                    display: 'flex',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {/* Search text field for the group */}
                                <GroupSearchBar />

                                <div style={{ padding: 0 }}></div>
                            </span>
                        </span>
                    </header>
                    <h1>Group</h1>
                    <section
                    //  className="providers"
                    >
                        {/* group map */}
                        <Grid container spacing={1}>
                            {groups.map((group) => (
                                <Grid item key={group.id} xs={2}>
                                    <GroupsListItem group={group} />
                                </Grid>
                            ))}
                        </Grid>
                    </section>
                </TabPanel>
            </Box>

            <body></body>
        </Grid>
    );
}

export default ProvidersList;
