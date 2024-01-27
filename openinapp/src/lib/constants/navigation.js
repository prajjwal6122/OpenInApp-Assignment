
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PollIcon from '@mui/icons-material/Poll';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <GridViewRoundedIcon />
	},
	{
		key: 'Upload',
		label: 'Upload',
		path: '/upload',
		icon: <PollIcon />
	},
	{
		key: 'Invoice',
		label: 'Invoice',
		path: '/invoice',
		icon: <DescriptionIcon />
	},
	{
		key: 'Schedule',
		label: 'Schedule',
		path: '/schedule',
		icon: <TextSnippetIcon />
	},
	{
		key: 'calendar',
		label: 'Calendar',
		path: '/calendar',
		icon: <CalendarMonthIcon />
	},
	{
		key: 'Notification',
		label: 'Notification',
		path: '/notification',
		icon: <NotificationsIcon />
	},
    {
		key: 'Settings',
		label: 'Settings',
		path: '/settings',
		icon: <SettingsIcon />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Logout',
		label: 'Log Out',
		path: '/login',
		icon: <LogoutIcon />
	},
	
]